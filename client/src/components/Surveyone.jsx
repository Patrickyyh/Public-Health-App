import { Model , StylesManager} from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useLocation } from 'react-router-dom'
import { useCallback } from 'react';
import 'survey-react/survey.css';
import { surveyAdultFood , surveyHousehold, surveyChildrenFood} from '../utility/SurveyType';
import 'survey-core/defaultV2.min.css';
import axios from 'axios'
StylesManager.applyTheme("defaultV2");


const surveyType = (type)=>{
  if (type === "household-food"){

    const survey = new Model(surveyHousehold);
    return survey

  }else if(type === "adult-food"){

    const survey = new Model(surveyAdultFood);
    return survey

  }else if(type === "children-food"){

    const survey = new Model(surveyChildrenFood);
    return survey

  }

}


const Surveyone = () => {

  const location = useLocation()
  // extract the type of survey
  const { type } = location.state


  // const survey = new Model(surveyJson);
  console.log(type);
  const survey = surveyType(type)
  const surveyComplete = useCallback(
    async (sender) => {
        const result = sender.data
        result.type = type
        // make request over here
        console.log(result);
        const response = await axios.post('/api/v1/survey' , {result})
        console.log(response);

    },
  )

  survey.onComplete.add(surveyComplete);
  return <Survey model={survey} />;
}

export default Surveyone


