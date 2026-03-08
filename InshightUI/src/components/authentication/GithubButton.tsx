// components/authentication/GithubButton.tsx

export default function GithubButton() {

  const handleGithubLogin = () => {
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID";
  };

  return (
    <button
      onClick={handleGithubLogin}
      className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
    >
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="github"
        className="w-5"
      />
      Continue with GitHub
    </button>
  );
}