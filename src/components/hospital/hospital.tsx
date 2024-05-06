import { useSelector } from 'react-redux';
import { HospitalItem } from './hospital-item';

export const Hospital = () => {
  const { hospitals }: any = useSelector<any>((state) => state.hospitals);
  console.log('hospitals', hospitals);
  return (
    <>
      {hospitals.length > 0 &&
        hospitals.map((hospital: any) => {
          return <HospitalItem data={hospital} key={hospital.id} />;
        })}
    </>
  );
};
