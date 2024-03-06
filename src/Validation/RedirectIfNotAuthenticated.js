const { useSession } = require('next-auth/react');
const { useRouter } = require('next/router');

const RedirectIfNotAuthenticated = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [status, router]);

  if (status) {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return children;
  }

  return null;
};
export default RedirectIfNotAuthenticated;
