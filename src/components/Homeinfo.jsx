import { Link } from 'react-router-dom'

import { arrow } from '../assets/icons'

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl  text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hey, I'm
        <span className="font-semibold mx-2 text-white">Lexxsh 😵‍💫</span>
        <br />A Software Developer from Inha Univ
      </h1>
    )

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          다양한 그리고 매력적인 여러가지 디자인 요소를 결합시켜
          <br />
          웹사이트를 제작 중에 있습니다!🤔
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    )
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Explore my portfolio of innovative projects,
          <br /> each telling a unique story of creativity and expertise.
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my work
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    )
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dedicated professional? <br />{' '}
          I'm just a message away,
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Get In touch!
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    )
  }

  return null
}

export default HomeInfo
