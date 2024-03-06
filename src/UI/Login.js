import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from '@material-tailwind/react';
import { signIn } from 'next-auth/react';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';

const LoginCard = () => {
  return (
    <Card className="lg:w-96 mx-auto my-8 shadow-2xl">
      <div className="text-center w-full py-4">
        <h1 className="text-2xl">Login</h1>
      </div>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <div className="w-full text-center block justify-center mx-auto">
        <h3>Login with</h3>
        <div className="flex w-full mx-auto justify-center my-2">
          <BsGoogle
            className="mx-1 h-8 w-8 cursor-pointer"
            onClick={() =>
              signIn('google', {
                callbackUrl: 'http://localhost:3000/',
              })
            }
          />
          <BsFacebook className="mx-1 h-8 w-8 cursor-pointer" />
        </div>
      </div>
      <CardFooter className="pt-0">
        <Button className="btn" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apost have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
