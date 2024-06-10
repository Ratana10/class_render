import Card from "../components/Card";
import cars from "../constants/cars.json";
import { CarItem } from "../type/Types";

const page = ({ params }: { params: { id: string } }) => {
  const carId = parseInt(params.id);

  const car: CarItem | undefined = cars.find(
    (car: CarItem) => car.id === carId
  );

  if (!car) {
    return <div className="text-center">Car not found</div>;
  }

  return (
    <div className="mt-20 flex ">
      <div className="mx-auto">
        <Card car={car} />
      </div>
    </div>
  );
};

export default page;
