import React from 'react';
import Section from './Section';
import Heading from './Heading';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const Services = () => {
  return (
    <Section id='offer' customPadding='my-20 mx-10' className='lg:max-h-fit'>
      <Heading text='Services' />
      <div className='grid grid-cols-3 gap-12 lg:px-10'>
        <Card className='mt-6 w-full'>
          <CardHeader color='blue-gray' className='relative h-56'>
            <img
              src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt='card-image'
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant='h5'
              color='blue-gray'
              className='mb-2 font-rubik'
            >
              Module cleaning
            </Typography>
            <Typography className='font-rubik'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button className='font-rubik'>Read More</Button>
          </CardFooter>
        </Card>

        <Card className='mt-6 w-full'>
          <CardHeader color='blue-gray' className='relative h-56'>
            <img
              src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt='card-image'
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant='h5'
              color='blue-gray'
              className='mb-2 font-rubik'
            >
              Inverter maintenance
            </Typography>
            <Typography className='font-rubik'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button className='font-rubik'>Read More</Button>
          </CardFooter>
        </Card>

        <Card className='mt-6 w-full'>
          <CardHeader color='blue-gray' className='relative h-56'>
            <img
              src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt='card-image'
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant='h5'
              color='blue-gray'
              className='mb-2 font-rubik'
            >
              Reporting
            </Typography>
            <Typography className='font-rubik'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button className='font-rubik'>Read More</Button>
          </CardFooter>
        </Card>

        <Card className='mt-6 w-full'>
          <CardHeader color='blue-gray' className='relative h-56'>
            <img
              src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt='card-image'
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant='h5'
              color='blue-gray'
              className='mb-2 font-rubik'
            >
              Plant monitoring and performance
            </Typography>
            <Typography className='font-rubik'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button className='font-rubik'>Read More</Button>
          </CardFooter>
        </Card>

        <Card className='mt-6 w-full'>
          <CardHeader color='blue-gray' className='relative h-56'>
            <img
              src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt='card-image'
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant='h5'
              color='blue-gray'
              className='mb-2 font-rubik'
            >
              Inverter communication
            </Typography>
            <Typography className='font-rubik'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button className='font-rubik'>Read More</Button>
          </CardFooter>
        </Card>

        <Card className='mt-6 w-full'>
          <CardHeader color='blue-gray' className='relative h-56'>
            <img
              src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt='card-image'
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant='h5'
              color='blue-gray'
              className='mb-2 font-rubik'
            >
              Plant Thermography
            </Typography>
            <Typography className='font-rubik'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button className='font-rubik'>Read More</Button>
          </CardFooter>
        </Card>

        <Card className='mt-6 w-full'>
          <CardHeader color='blue-gray' className='relative h-56'>
            <img
              src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt='card-image'
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant='h5'
              color='blue-gray'
              className='mb-2 font-rubik'
            >
              Chemical Cleaning
            </Typography>
            <Typography className='font-rubik'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button className='font-rubik'>Read More</Button>
          </CardFooter>
        </Card>

        <Card className='mt-6 w-full'>
          <CardHeader color='blue-gray' className='relative h-56'>
            <img
              src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt='card-image'
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant='h5'
              color='blue-gray'
              className='mb-2 font-rubik'
            >
              Revamping
            </Typography>
            <Typography className='font-rubik'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button className='font-rubik'>Read More</Button>
          </CardFooter>
        </Card>

        <Card className='mt-6 w-full'>
          <CardHeader color='blue-gray' className='relative h-56'>
            <img
              src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt='card-image'
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant='h5'
              color='blue-gray'
              className='mb-2 font-rubik'
            >
              Street lights
            </Typography>
            <Typography className='font-rubik'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button className='font-rubik'>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </Section>
  );
};

export default Services;
