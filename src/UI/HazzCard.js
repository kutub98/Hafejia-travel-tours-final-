import {
  Card,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import VisaProcess from '../Assets/medicalVisa.jpg';
const ServiceCard = () => {
  return (
    <Card className="my-6 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
          src={VisaProcess}
          width={'w-full'}
          height={'full'}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          ভিসা প্রসেসিং
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={'/visaProcess'}>
          <Button className="w-full btn">More Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
