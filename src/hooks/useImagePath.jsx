//有氧照片
import runningImg from "../../public/images/sportItems/running.jpg";
import swimmingImg from "../../public/images/sportItems/swimming.jpg";
import bikingImg from "../../public/images/sportItems/biking.jpg";
import ropeImg from "../../public/images/sportItems/rope.jpg";
import aerobicDanceImg from "../../public/images/sportItems/aerobicDance.jpg";
import intervalExerciseImg from "../../public/images/sportItems/intervalExercise.jpg";
//重訓照片
import barbellSquatImg from "../../public/images/sportItems/barbellSquat.jpg";
import dumbbellBenchImg from "../../public/images/sportItems/dumbbellBench.jpg";
import pullUpImg from "../../public/images/sportItems/pullUp.jpg";
import dumbbellPressImg from "../../public/images/sportItems/dumbbellPress.jpg";
import barbellDeadliftImg from "../../public/images/sportItems/barbellDeadlift.jpg";
import sitUpsImg from "../../public/images/sportItems/sitUps.jpg";
//商品照片
import swimmingPantsImg from "../../public/images/cartItems/swimmingPants.jpg";
import jumpRopeImg from "../../public/images/cartItems/jumpRope.jpg";
import sportsTShirtImg from "../../public/images/cartItems/sportsTShirt.jpg";
import sportPantImg from "../../public/images/cartItems/sportPant.jpg";
import sportsShoesImg from "../../public/images/cartItems/sportsShoes.jpg";
import yogaMatImg from "../../public/images/cartItems/yogaMat.jpg";
import fitnessBeltImg from "../../public/images/cartItems/fitnessBelt.jpg";
import dumbbelImg from "../../public/images/cartItems/dumbbel.jpg";
import elasticRopeImg from "../../public/images/cartItems/elasticRope.jpg";
import strengthBracersImg from "../../public/images/cartItems/strengthBracers.jpg";
//肌肉照片
import muscleFrontImg from "../../public/images/muscleFront.png";
import muscleBackImg from "../../public/images/muscleBack.png";

export default function useImagePath(imageName) {
  switch (imageName) {
    case "muscleFrontImg":
      return muscleFrontImg;
    case "muscleBackImg":
      return muscleBackImg;
    case "runningImg":
      return runningImg;
    case "swimmingImg":
      return swimmingImg;
    case "bikingImg":
      return bikingImg;
    case "ropeImg":
      return ropeImg;
    case "aerobicDanceImg":
      return aerobicDanceImg;
    case "intervalExerciseImg":
      return intervalExerciseImg;
    case "barbellSquatImg":
      return barbellSquatImg;
    case "dumbbellBenchImg":
      return dumbbellBenchImg;
    case "pullUpImg":
      return pullUpImg;
    case "dumbbellPressImg":
      return dumbbellPressImg;
    case "barbellDeadliftImg":
      return barbellDeadliftImg;
    case "sitUpsImg":
      return sitUpsImg;
    case "swimmingPantsImg":
      return swimmingPantsImg;
    case "jumpRopeImg":
      return jumpRopeImg;
    case "sportsTShirtImg":
      return sportsTShirtImg;
    case "sportPantImg":
      return sportPantImg;
    case "sportsShoesImg":
      return sportsShoesImg;
    case "yogaMatImg":
      return yogaMatImg;
    case "fitnessBeltImg":
      return fitnessBeltImg;
    case "dumbbelImg":
      return dumbbelImg;
    case "elasticRopeImg":
      return elasticRopeImg;
    case "strengthBracersImg":
      return strengthBracersImg;
    default:
      return null;
  }
}
