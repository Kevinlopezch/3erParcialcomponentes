// organisms/ExerciseList.tsx
import ExerciseInfo from "../molecules/ExerciseInfo";

const exercises = [
  {
    image:
      "https://image.tuasaude.com/media/article/ll/ae/puxada-frontal_63648.jpg",
    title: "Puxada frontal",
    sets: 3,
    reps: 12,
    color: "border-green-400",
  },
  {
    image:
      "https://saude.abril.com.br/wp-content/uploads/2024/10/remada-curvada.jpg?crop=1&resize=1212,909",
    title: "Remada curvada",
    sets: 3,
    reps: 12,
    color: "border-blue-400",
  },
  {
    image:
      "https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg",
    title: "Remada unilateral",
    sets: 3,
    reps: 12,
    color: "border-purple-500",
  },
  {
    image:
      "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2024/01/03/281364820-levantamento-terra.jpg",
    title: "Levantamento terra",
    sets: 3,
    reps: 12,
    color: "border-pink-500",
  },
];

export default function ExerciseList() {
  return (
    <div className="p-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className=" text-xl font-bold">Exercícios</h2>
            <span>{exercises.length}</span>
        </div>
      {exercises.map((ex, idx) => (
        <ExerciseInfo key={idx} {...ex} />
      ))}
    </div>
  );
}
