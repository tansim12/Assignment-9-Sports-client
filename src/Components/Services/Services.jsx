import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/service.json");
        const data = await res.json();
        setServiceData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {serviceData?.map((item) => (
        <ServicesCard key={item?.id} item={item}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
