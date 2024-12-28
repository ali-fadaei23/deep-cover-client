import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function App() {
  return (
    <Card className='max-w-[400px]'>
      <CardHeader className='flex gap-3'></CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
  );
}
