
import { 
  db, doc, getDoc, updateDoc,
  auth, deleteDoc,  userId, getStorage, ref, uploadBytes, 
  getDownloadURL, limit, arrayUnion, RecaptchaVerifier, increment,
   arrayRemove, signInWithPhoneNumber, query, setDoc, 
   addDoc, signInAnonymously, orderBy, onAuthStateChanged, 
   uploadBytesResumable, signInWithPopup, FacebookAuthProvider, 
   GoogleAuthProvider, startAfter, OAuthProvider, signOut,
    getFirestore, serverTimestamp,  userInfo,
createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteObject,
where, getDocs, storage, getAuth, collection, analytics,EmailAuthProvider,
googleProvider,onSnapshot ,writeBatch ,batch, linkWithCredential,
facebookProvider
    } from 'https://rw-501.github.io/tripapp/scripts/js/auth.js';




    import { 

        } from 'https://rw-501.github.io/tripapp/scripts/js/ecode.js';
  
  
        import { 

        } from 'https://rw-501.github.io/tripapp/scripts/js/trackers.js';
  
  



   // Define the  function to check if a specific keyword is in the URL
   function checkUrl(keyword) {
    // Get the current URL
    const currentUrl = window.location.href;
   // console.log("currentUrl:", currentUrl);
   // console.log("keyword:", keyword);
  
    // Return true if the keyword is found in the URL, otherwise false
    return currentUrl.includes(keyword);
  };
  
  window.checkUrl = checkUrl;


// Function to update or create user information in Firestore
const saveUserLoginState = async (user, isNewUser = false, joinedDate = null) => {
  try {

    if (!user) {
      console.log("User is null. Checking login state...");
      onAuthStateChanged(auth, (loggedInUser) => {
        if (loggedInUser) {
         user = loggedInUser;

        } else {
          console.log("No user logged in.");
        }
      });
    }
    
    const popupLoginContainer = document.getElementById("popup-login-container");

    if (popupLoginContainer) {
      popupLoginContainer.remove();
    }



    console.log("User info: ", user);
    let providerData = []; 

    // Fetch user provider data
  if(user.providerData.length > 0){
    providerData = user.providerData.length > 0 ? user.providerData[0].providerId : 'unknown';
  }

    // Optional: Map providerId to a more human-readable format
    const providerMap = {
      'password': 'Email/Password',
      'google.com': 'Google',
      'phone': 'Phone Number',
      'anonymous': 'Anonymous',
      // Add more as needed
    };

    const loginProvider = providerMap[providerData] || providerData;

    const userID = user.uid;

    let jobArray = [], tagArray = [];

    const userDataSaved = getUserData() || [];
    const userIP = sessionStorage.getItem('userIP') || "";

    let userTagInterest = JSON.parse(localStorage.getItem('userTagInterest')) || [];

    let userJobInterest = JSON.parse(localStorage.getItem('userJobInterest')) || [];
    //console.log(" User userIP: ", userIP);
    const locationData = JSON.parse(sessionStorage.getItem('userLocation'));

    const profilePicArea = document.getElementById('nav-bar-profilePic');
    let profilePic = '';

    if (profilePicArea) {
      profilePic = profilePicArea.src;
    }




    if (userTagInterest.length == 0) {
      userTagInterest = [
        {
          tag: locationData.city,
          rank: 1
        }, {
          isLast: true,
          tag: locationData.state,
          rank: 1
        }, {
          isLast: true,
          tag: "job",
          rank: 1
        }, {
          isLast: true,
          tag: "jobs",
          rank: 1
        }
      ];
    }

    if (userJobInterest.length == 0) {
      userJobInterest = [{
        isLast: true,
        job: locationData.city,
        rank: 1
      }, {
        isLast: true,
        job: locationData.state,
        rank: 1
      }, {
        isLast: true,
        job: "job",
        rank: 1
      }, {
        isLast: true,
        job: "jobs",
        rank: 1
      }
      ];
    }
    tagArray = userTagInterest.map(item => item.tag); // Extract only the tags

    jobArray = userJobInterest.map(item => item.job); // Extract only the tags

    // console.log(" User tagArray: ", tagArray);
    // console.log(" User jobArray: ", jobArray);

    // console.log(" userTagInterest: ", userTagInterest);
    // console.log(" userJobInterest: ", userJobInterest);




    /* 
    const connectionsRef = collection(db, 'Connections');
    const q = query(connectionsRef, where('participants', 'array-contains', userID));

    const qConnectionSnapshot = await getDocs(q);
    const connectionCount = qConnectionSnapshot.size; // Number of matching documents
 */
    const { email, uid, emailVerified, displayName, phoneNumber, photoURL } = user;


    
   
    











    const DEFAULT_MEMBERSHIP_DURATION_DAYS = 30;
    const MAX_SECURITY_FAIL_COUNT = 3;
    const VILATON_INCUMENT_1 = 1;
    const VILATON_INCUMENT_2 = 2;
    const VILATON_INCUMENT_3 = 3;


    let userAccountStatusCount = 0;
    let userAccountStatus = "OK";


    let isAccountLocked = false;

    let userData = {
      // Basic User Information
      email: email || "",                                      // User's email address
      lastLogin: new Date(),                                    // Last login timestamp
      ipAddress: userIP || "",                                  // User's IP address
      userID: uid || "",                                        // Unique user identifier
      verified: emailVerified || false,                          // Email verification status
      loginMethod: loginProvider,                               // Provider used for login (e.g., Google, Facebook)
      userAccountStatus: userAccountStatus || 'OK',              // Account status (active, suspended, etc.)
      isAccountLocked: isAccountLocked || false,                 // Lock status of the account
      userAccountStatusCount: userAccountStatusCount,            // Account status count (could be attempts, etc.)
      lastUpdateTime: userDataSaved.lastUpdateTime || new Date(), // Last update timestamp

      tripsOwned: userDataSaved.tripsOwned || [],
      tripsJoined: userDataSaved.tripsJoined || [],
  
      // Security and Reporting
      reportedCount: userDataSaved.reportedCount || 0,          // Count of times the user has been reported
      securityQuestions: userDataSaved.securityQuestions || [],  // Security questions associated with the account
      securityQuestionFailCount: userDataSaved.securityQuestionFailCount || 0,  // Count of failed security question attempts
      securityQuestionResetTime: userDataSaved.securityQuestionResetTime || '',  // Time of the last reset of security questions

      // User's Personal Information
      displayName: userDataSaved.displayName || displayName,    // Display name for the user
      phoneNumber: userDataSaved.phoneNumber || phoneNumber || '', // User's phone number
      profilePicture: userDataSaved.profilePicture || photoURL || profilePic || '', // Profile picture URL
      joinedDate: userDataSaved.joinedDate || joinedDate || new Date(), // Date the user joined the platform
      passwordLastChangedDate: userDataSaved.passwordLastChangedDate || joinedDate || new Date(), // Date the password was last changed

      // Financial and Membership Information
      accountBalance: userDataSaved.accountBalance || 0,        // User's account balance
      accountBalanceUpdateDate: userDataSaved.accountBalanceUpdateDate || new Date(), // Date when account balance was last updated

      membershipType: userDataSaved.membershipType || "free",   // Type of membership (e.g., free, pro)
      membershipMonthCount: userDataSaved.membershipMonthCount || 0, // Number of months the user has been a member
      membershipStartDate: userDataSaved.membershipStartDate || joinedDate, // Start date of membership
      membershipUpdateDate: userDataSaved.membershipUpdateDate || joinedDate, // Last update date of membership
      membershipRenewalDate: userDataSaved.membershipRenewalDate || new Date(new Date().setDate(new Date().getDate() + DEFAULT_MEMBERSHIP_DURATION_DAYS)), // Renewal date for membership
      membershipExpiry: userDataSaved.membershipExpiry || new Date(new Date().setDate(new Date().getDate() + DEFAULT_MEMBERSHIP_DURATION_DAYS)), // Expiry date of membership

      // Boost Credits and Restrictions
      applicationsBoostCredits: userDataSaved.applicationsBoostCredits || 0,  // Boost credits for applications
      profileBoostCredits: userDataSaved.profileBoostCredits || 0,          // Boost credits for profile visibility
      jobPostCredits: userDataSaved.jobPostCredits || 0,                    // Credits for posting jobs
      sponsoredJobPostCredits: userDataSaved.sponsoredJobPostCredits || 0,  // Credits for sponsored job posts
      videoBoostCredits: userDataSaved.videoBoostCredits || 0,              // Boost credits for video posts
      sponsoredVideoPostCredits: userDataSaved.sponsoredVideoPostCredits || 0, // Sponsored video post credits

      // Trial Period Information
      basicTrialUseBool: userDataSaved.basicTrialUseBool || false,          // Whether basic trial has been used
      proTrialUseBool: userDataSaved.proTrialUseBool || false,              // Whether pro trial has been used
      basicTrialStartDate: userDataSaved.basicTrialStartDate || '',          // Start date for basic trial
      proTrialStartDate: userDataSaved.proTrialStartDate || '',             // Start date for pro trial
      basicTrialEndDate: userDataSaved.basicTrialEndDate || '',          // End date for basic trial
      proTrialEndDate: userDataSaved.proTrialEndDate || '',             // Emd date for pro trial



      // User Preferences and Settings
      notificationPreferences: userDataSaved.notificationPreferences || [], // User's notification preferences
      autoLogoutTime: userDataSaved.autoLogoutTime || 100000,              // Auto logout time (in milliseconds)

      // Store Information
      storeProductListingsCount: userDataSaved.storeProductListingsCount || 0, // Number of store product listings
      storeBoostedProductsCount: userDataSaved.storeBoostedProductsCount || 0, // Number of boosted products in store

      // Tags and Job Interests
      tags: tagArray || "",                                              // Tags associated with the user
      jobInterest: jobArray || "",                                        // Job interests of the user
      publicProfile: userDataSaved.publicProfile || true,                 // Whether the profile is public

      // Number of job posts created
      tagsCount: tagArray.length || 0,                                    // Number of tags the user has
      jobInterestCount: jobArray.length || 0,                             // Number of job interests
    };

    //console.log(" User userData: ", userData);


    const updatedUserData = {
      ...userData,
     // videoResumeData: sortedAndLimitedData
    };


    console.log("userDataSaved.userID: ",userDataSaved.userID);
    console.log("user.uid: ",user.uid);
    console.log("userData.userID: ",userData.userID);

    const userDocRef = doc(db, "Users", userDataSaved.userID);
    await setDoc(userDocRef, userData, {
      merge: true
    });
    const userDataEcode = setUserData(updatedUserData);
    localStorage.setItem('userData', userDataEcode);





    localStorage.setItem('userJobInterest', JSON.stringify(userJobInterest));
    localStorage.setItem('userTagInterest', JSON.stringify(userTagInterest));


    localStorage.setItem("userLoggedIn", true);


    showToast("Login state saved successfully!", "success");


    /**
* Redirects the user based on the last visited page.
* If the last page contains "obituaries," redirects to "/obituaries."
* Otherwise, redirects to "/u/" (profile page).
*/
    const lastPage = document.referrer; // Get the URL of the last visited page

    if (isNewUser) {

      if (lastPage && lastPage.includes("obituaries")) {
        // Redirect to the obituaries page
        window.location.href = "/obituaries";
      } else {
        // Redirect to the profile page
        window.location.href = "/u/";
      }
    }



  } catch (error) {

    console.error("Failed to set user document:", error);

    try {
      console.log("user.uid: ",user.uid);

      // Attempt to retrieve the latest user data from the database
      const userDocRef = doc(db, "Users", user.uid);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        const freshUserData = userSnapshot.data();
        console.log("Fetched fresh user data from DB:", freshUserData);

        // Attempt to reset user data in local storage and update with fresh data

        localStorage.removeItem('userData');

        let newUserData = setUserData(freshUserData);
        localStorage.setItem('userData', newUserData);
        console.log("Successfully recovered and updated user data.");
        localStorage.setItem("userLoggedIn", true);



      } else {
        console.error("User data not found in the database.");
        localStorage.setItem("userLoggedIn", false);

      }
    } catch (fetchError) {
      console.error("Failed to fetch or update user data from the database:", fetchError);
      localStorage.setItem("userLoggedIn", false);

    } finally {
      console.log("Updated");

      
    }

  }



};

window.saveUserLoginState = saveUserLoginState;

