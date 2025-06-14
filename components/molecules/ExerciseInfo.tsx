/* eslint-disable jsx-a11y/alt-text */
// molecules/ExerciseInfo.tsx
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Icon from "../atoms/Icon";

interface Props {
  image: string;
  title: string;
  sets: number;
  reps: number | string;
  tag?: string;
  color?: string;
}

export default function ExerciseInfo({
  image,
  title,
  sets,
  reps, 
  color = "border-white",
}: Props) {
  return (
    <div
      className={`flex justify-between items-center p-2 border-2 ${color} rounded-lg mb-2`}
    >
      <div className="flex items-center gap-4">
        <Image src={image} />
        <div>
          <Text className="font-bold">{title}</Text>
          <Text>{`${sets} séries x ${reps} repetições`}</Text>
        </div>
      </div>
       
        <Icon />
       
    </div>
  );
}
