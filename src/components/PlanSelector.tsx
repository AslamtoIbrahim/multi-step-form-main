import PlanOption from "./PlanOption"
import arcade_img from "../assets/icon-arcade.svg"
import advanced_img from "../assets/icon-advanced.svg"
import pro_img from "../assets/icon-pro.svg"

const PlanSelector = () => {
  return (
    <div className="space-y-4">
      <PlanOption image={arcade_img} title="Arcade" price={90} isSelected={true} />
      <PlanOption image={advanced_img} title="Arcade" price={120} isSelected={false} />
      <PlanOption image={pro_img} title="Arcade" price={150} isSelected={false} />
    </div>
  )
}

export default PlanSelector
