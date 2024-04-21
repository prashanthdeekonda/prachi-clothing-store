import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);

    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
};

export default SignIn;
