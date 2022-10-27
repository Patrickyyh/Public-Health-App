 export const surveyJson ={
    "title": "U.S. Household Food Security Survey",
    "logoPosition": "right",
    "completedHtml": "<h3>Thank you for completing the survey</h3>",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "html",
        "name": "question3",
        "html": "<p style=\"text-align: center;\"><strong>U.S. HOUSEHOLD FOOD SECURITY SURVEY MODULE: THREE-STAGE DESIGN, WITH SCREENERS Economic Research Service, USDA September 2012</strong></p>\n<p><strong><u>Revision Notes</u>:</strong> The food security questions are essentially unchanged from those in the original module first implemented in 1995 and described previously in this document.</p>\n<p><strong>September 2012:&nbsp;</strong></p>\n<p>Corrected skip specifications in AD5&nbsp;</p>\n<p>Added coding specifications for &ldquo;How many days&rdquo; for 30-day version of AD1a and AD5a.&nbsp;</p>\n<p><strong>July 2008:&nbsp;</strong></p>\n<p>Wording of resource constraint in AD2 was corrected to, &ldquo;&hellip;because there wasn&rsquo;t enough money for food&rdquo; to be consistent with the intention of the September 2006 revision.&nbsp;</p>\n<p>Corrected errors in &ldquo;Coding Responses&rdquo; Section</p>\n<p><strong>September 2006:&nbsp;</strong></p>\n<p>Minor changes were introduced to standardize wording of the resource constraint in most questions to read, &ldquo;&hellip;because there wasn&#39;t enough money for food.&rdquo;&nbsp;</p>\n<p>Question order was changed to group the child-referenced questions following the household- and adult-referenced questions. The Committee on National Statistics panel that reviewed the food security measurement methods in 2004-06 recommended this change to reduce cognitive burden on respondents. Conforming changes in screening specifications were also made. NOTE: Question numbers were revised to reflect the new question order.&nbsp;</p>\n<p>Follow up questions to the food sufficiency question (HH1) that were included in earlier versions of the module have been omitted.</p>\n<p>User notes following the questionnaire have been revised to be consistent with current practice and with new labels for ranges of food security and food insecurity introduced by USDA in 2006</p>\n<p><u><strong>Transition into Module (administered to all households): </strong></u></p>\n<p>These next questions are about the food eaten in your household in the last 12 months, since (current month) of last year and whether you were able to afford the food you need.</p>\n<p><u><strong>Optional USDA Food Sufficiency Question/Screener: Question HH1</strong></u></p>\n<p><strong>(This question is optional. It is not used to calculate any of the food security scales. It may be used in conjunction with income as a preliminary screener to reduce respondent burden for high income households).&nbsp;</strong></p>\n<p>HH1. [IF ONE PERSON IN HOUSEHOLD, USE &quot;I&quot; IN PARENTHETICALS, OTHERWISE, USE &quot;WE.&quot;]</p>\n<p>Which of these statements best describes the food eaten in your household in the last 12 months: &mdash;enough of the kinds of food (I/we) want to eat; &mdash;enough, but not always the kinds of food (I/we) want; &mdash;sometimes not enough to eat; or, &mdash;often not enough to eat?</p>\n<p>[1] Enough of the kinds of food we want to eat</p>\n<p>[2] Enough but not always the kinds of food we want</p>\n<p>[3] Sometimes not enough to eat</p>\n<p>[4] Often not enough to eat</p>\n<p>[ ] DK or Refused&nbsp;</p>"
       },
       {
        "type": "html",
        "name": "question1",
        "html": "<p>Household Stage 1: Questions HH2-HH4 (asked of all households; begin scale items).</p>\n<p>[IF SINGLE ADULT IN HOUSEHOLD, USE &quot;I,&quot; &quot;MY,&quot; AND &ldquo;YOU&rdquo; IN PARENTHETICALS;</p>\n<p>OTHERWISE, USE &quot;WE,&quot; &quot;OUR,&quot; AND &quot;YOUR HOUSEHOLD.&quot;]</p>\n"
       },
       {
        "type": "radiogroup",
        "name": "start_using",
        "title": "Now I’m going to read you several statements that people have made about their foodsituation. For these statements, please tell me whether the statement was often true,sometimes true, or never true for (you/your household) in the last 12 months—that is,since last (name of current month).\nThe first statement is “(I/We) worried whether (my/our) food would run out before (I/we)got money to buy more.” Was that often true, sometimes true, or never true for (you/yourhousehold) in the last 12 months?",
        "isRequired": true,
        "choices": [
         "Often true",
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "Sometimes true"
         },
         "Never true",
         "DK or Refused"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "“The food that (I/we) bought just didn’t last, and (I/we) didn’t have money to get more.”\nWas that often, sometimes, or never true for (you/your household) in the last 12 months??",
        "isRequired": true,
        "choices": [
         "Often true",
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "Sometimes true"
         },
         "Never true",
         "DK or Refused"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question4",
        "title": "“(I/we) couldn’t afford to eat balanced meals.” Was that often, sometimes, or never true\nfor (you/your household) in the last 12 months?\n",
        "isRequired": true,
        "choices": [
         "Often true",
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "Sometimes true"
         },
         "Never true",
         "DK or Refused"
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "html",
        "name": "question5",
        "html": "<p><u><strong>Screener for Stage 2 Adult-Referenced Questions</strong></u>: If affirmative response (i.e., &quot;often true&quot; or &quot;sometimes true&quot;) to one or more of Questions HH2-HH4, OR, response [3] or [4] to question HH1 (if administered), then continue to <strong>Adult Stage 2</strong>; otherwise, if children under age 18 are present in the household, skip to <strong>Child Stage 1</strong>, otherwise skip to <strong>End of Food Security Module.</strong></p>\n"
       },
       {
        "type": "html",
        "name": "question6",
        "html": "<p><em><strong>NOTE:</strong></em> In a sample similar to that of the general U.S. population, about 20 percent of households (45 percent of households with incomes less than 185 percent of poverty line) will pass this screen and continue to Adult Stage 2.&nbsp;</p>"
       },
       {
        "type": "html",
        "name": "question7",
        "html": "<p><strong><u>Adult Stage 2: Questions AD1-AD4</u> (asked of households passing the screener for Stage 2 adult-referenced questions).</strong></p>\n"
       },
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "AD1 :In the last 12 months, since last (name of current month), did (you/you or other adults in your household) ever cut the size of your meals or skip meals because there wasn't enough money for food?",
        "isRequired": true,
        "choices": [
         {
          "value": "Often true",
          "text": "Yes"
         },
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "No (Skip AD1a)"
         },
         {
          "value": "Never true",
          "text": "DK (Skip AD1a)"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "AD1a. [IF YES ABOVE, ASK] How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
        "choices": [
         "Almost every month",
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "Some months but not every month"
         },
         "Only 1 or 2 months",
         {
          "value": "Only 1 or 3 months",
          "text": "DK"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question10",
        "title": "AD2. In the last 12 months, did you ever eat less than you felt you should because there wasn't enough money for food?\n",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Yes"
         },
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "No"
         },
         {
          "value": "Only 1 or 3 months",
          "text": "DK"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question11",
        "title": "AD3. In the last 12 months, were you every hungry but didn't eat because there wasn't enough money for food?",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Yes"
         },
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "No"
         },
         {
          "value": "Only 1 or 3 months",
          "text": "DK"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question12",
        "title": "AD4. In the last 12 months, did you lose weight because there wasn't enough money for food?",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Yes"
         },
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "No"
         },
         {
          "value": "Only 1 or 3 months",
          "text": "DK"
         }
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "html",
        "name": "question13",
        "html": "<p><strong>Screener for Stage 3 Adult-Referenced Questions:</strong> If affirmative response to one or more of questions AD1 through AD4, then continue to<strong> Adult Stage 3</strong>; otherwise, if children under age 18 are present in the household, skip to<strong> Child Stage 1</strong>, otherwise skip to <strong>End of Food Security Module.&nbsp;</strong></p>"
       },
       {
        "type": "html",
        "name": "question14",
        "html": "<p><u><strong>NOTE:</strong></u> In a sample similar to that of the general U.S. population, about 8 percent of households (20 percent of households with incomes less than 185 percent of poverty line) will pass this screen and continue to Adult Stage 3.</p>\n"
       },
       {
        "type": "html",
        "name": "question15",
        "html": "<p><u><strong>Adult Stage 3: Questions AD5-AD5a</strong></u><strong> (asked of households passing screener for Stage 3 adult-referenced questions).</strong></p>\n\n"
       },
       {
        "type": "radiogroup",
        "name": "question16",
        "title": "AD5. In the last 12 months, did (you/you or other adults in your household) ever not eat for a whole day because there wasn't enough money for food?",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Yes"
         },
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "No (Skip AD5a)"
         },
         {
          "value": "Only 1 or 3 months",
          "text": "DK (Skip AD5a)"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question17",
        "title": "AD5a. [IF YES ABOVE, ASK] How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?\n",
        "choices": [
         "Almost every month",
         {
          "value": {
           "text": "Sometimes true"
          },
          "text": "Some months but not every month"
         },
         {
          "value": "Only 1 or 3 months",
          "text": "Only 1 or 2 months"
         },
         {
          "value": "Only 1 or 4 months",
          "text": "DK"
         }
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "html",
        "name": "question20",
        "html": "<p><u><strong>Child Stage 1: Questions CH1-CH3 (Transitions and questions CH1 and CH2 are administered to all households with children under age 18)</strong></u> Households with no child under age 18, skip to<strong> End of Food Security Module.</strong></p>\n"
       },
       {
        "type": "html",
        "name": "question21",
        "html": "<p>SELECT APPROPRIATE FILLS DEPENDING ON NUMBER OF ADULTS AND NUMBER OF CHILDREN IN THE HOUSEHOLD</p>\n\n"
       },
       {
        "type": "html",
        "name": "question22",
        "html": "<p><u><strong>Transition into Child-Referenced Questions: </strong></u></p>\n<p>Now I&#39;m going to read you several statements that people have made about the food situation of their children. For these statements, please tell me whether the statement was OFTEN true, SOMETIMES true, or NEVER true in the last 12 months for (your child/children living in the household who are under 18 years old).</p>\n\n"
       },
       {
        "type": "radiogroup",
        "name": "question23",
        "title": "CH1. “(I/we) relied on only a few kinds of low-cost food to feed (my/our) child/the children) because (I was/we were) running out of money to buy food.” Was that often, sometimes, or never true for (you/your household) in the last 12 months?",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Often true"
         },
         "Sometimes true",
         {
          "value": "Only 1 or 3 months",
          "text": "Never true"
         },
         {
          "value": "Only 1 or 4 months",
          "text": "DK or Refused"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question24",
        "title": "CH2. “(I/We) couldn’t feed (my/our) child/the children) a balanced meal, because (I/we)\ncouldn’t afford that.” Was that often, sometimes, or never true for (you/your household)\nin the last 12 months?",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Often true"
         },
         "Sometimes true",
         {
          "value": "Only 1 or 3 months",
          "text": "Never true"
         },
         {
          "value": "Only 1 or 4 months",
          "text": "DK or Refused"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question25",
        "title": "CH3. \"(My/Our child was/The children were) not eating enough because (I/we) just couldn't afford enough food.\" Was that often, sometimes, or never true for (you/your household) in the last 12 months?",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Often true"
         },
         "Sometimes true",
         {
          "value": "Only 1 or 3 months",
          "text": "Never true"
         },
         {
          "value": "Only 1 or 4 months",
          "text": "DK or Refused"
         }
        ]
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "html",
        "name": "question26",
        "html": "<p><u><strong>Screener for Stage 2 Child Referenced Questions</strong></u>: If affirmative response (i.e., &quot;often true&quot; or &quot;sometimes true&quot;) to one or more of questions CH1-CH3, then continue to <strong>Child Stage 2</strong>; otherwise skip to <strong>End of Food Security Module.&nbsp;</strong></p>"
       },
       {
        "type": "html",
        "name": "question27",
        "html": "<p><u><strong>NOTE</strong></u>: In a sample similar to that of the general U.S. population, about 16 percent of households with children (35 percent of households with children with incomes less than 185 percent of poverty line) will pass this screen and continue to Child Stage 2.</p>\n"
       },
       {
        "type": "html",
        "name": "question28",
        "html": "<p><strong>Child Stage 2: Questions CH4-CH7 (asked of households passing the screener for stage 2 child-referenced questions). </strong></p>\n<p><strong>NOTE</strong>: In Current Population Survey Food Security Supplements, question CH6 precedes question CH5.</p>\n"
       },
       {
        "type": "radiogroup",
        "name": "question29",
        "title": "CH4. In the last 12 months, since (current month) of last year, did you ever cut the size of (your child's/any of the children's) meals because there wasn't enough money for food?",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Yes"
         },
         {
          "value": "Sometimes true",
          "text": "No"
         },
         {
          "value": "Only 1 or 3 months",
          "text": "DK"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question30",
        "title": "CH5. In the last 12 months, did (CHILD’S NAME/any of the children) ever skip meals because there wasn't enough money for food?\n",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Yes"
         },
         {
          "value": "Sometimes true",
          "text": "No (Skip CH5a)"
         },
         "DK (Skip CH5a)"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question31",
        "title": "CH5a. [IF YES ABOVE ASK] How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?\n\n",
        "choices": [
         "Almost every month",
         {
          "value": "Sometimes true",
          "text": "Some months but not every month"
         },
         {
          "value": "DK (Skip CH5a)",
          "text": "Only 1 or 2 months"
         },
         {
          "value": "DK (Skip CH6a)",
          "text": "DK"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question32",
        "title": "CH6. In the last 12 months, (was your child/were the children) ever hungry but you just couldn't afford more food?",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Yes"
         },
         {
          "value": "Sometimes true",
          "text": "No"
         },
         {
          "value": "DK (Skip CH6a)",
          "text": "DK"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question33",
        "title": "CH7. In the last 12 months, did (your child/any of the children) ever not eat for a whole day because there wasn't enough money for food?",
        "isRequired": true,
        "choices": [
         {
          "value": "Almost every month",
          "text": "Yes"
         },
         {
          "value": "Sometimes true",
          "text": "No"
         },
         {
          "value": "DK (Skip CH6a)",
          "text": "DK"
         }
        ]
       }
      ]
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "html",
        "name": "question34",
        "html": "<p style=\"text-align: center;\"><strong>END OF FOOD SECURITY MODULE </strong></p>\n<p style=\"text-align: center;\"><strong>User Notes</strong></p>\n\n"
       },
       {
        "type": "html",
        "name": "question19",
        "html": "<p><u><strong>(1) Coding Responses and Assessing Household Food Security Status:</strong></u></p>\n<p>Following is a brief overview of how to code responses and assess household food security status based on various standard scales. For detailed information on these procedures, refer to the Guide to Measuring Household Food Security, Revised 2000, and Measuring Children&rsquo;s Food Security in U.S. Households, 1995-1999. Both publications are available through the ERS Food Security in the United States Briefing Room.&nbsp;</p>\n<p>&nbsp;</p>"
       },
       {
        "type": "html",
        "name": "question35",
        "html": "<p>Responses of &ldquo;yes,&rdquo; &ldquo;often,&rdquo; &ldquo;sometimes,&rdquo; &ldquo;almost every month,&rdquo; and &ldquo;some months but not every month&rdquo; are coded as affirmative. The sum of affirmative responses to a specified set of items is referred to as the household&rsquo;s raw score on the scale comprising those items.</p>\n"
       },
       {
        "type": "html",
        "name": "question36",
        "html": "<p>*Questions HH2 through CH7 comprise the U.S. Household Food Security Scale (questions HH2 through AD5a for households with no child present). Specification of food security status depends on raw score and whether there are children in the household (i.e., whether responses to child-referenced questions are included in the raw score).</p>\n<p>o For households with one or more children:</p>\n<p>&nbsp; &nbsp;--Raw score zero&mdash;High food security</p>\n<p>&nbsp; --Raw score 1-2&mdash;Marginal food security</p>\n<p>&nbsp; --Raw score 3-7&mdash;Low food security</p>\n<p>&nbsp; --Raw score 8-18&mdash;Very low food security</p>\n<p>o For households with no child present:</p>\n<p>&nbsp; --Raw score zero&mdash;High food security</p>\n<p>&nbsp; --Raw score 1-2&mdash;Marginal food security</p>\n<p>&nbsp; --Raw score 3-5&mdash;Low food security</p>\n<p>&nbsp; --Raw score 6-10&mdash;Very low food security</p>\n<p>Households with high or marginal food security are classified as food secure. Those with low or very low food security are classified as food insecure.</p>\n\n"
       },
       {
        "type": "html",
        "name": "question37",
        "html": "<p>* Questions HH2 through AD5a comprise the U.S. Adult Food Security Scale.</p>\n<p>&nbsp; --Raw score zero&mdash;High food security among adults</p>\n<p>&nbsp; --Raw score 1-2&mdash;Marginal food security among adults</p>\n<p>&nbsp; --Raw score 3-5&mdash;Low food security among adults</p>\n<p>&nbsp; --Raw score 6-10&mdash;Very low food security among adults</p>\n"
       },
       {
        "type": "html",
        "name": "question38",
        "html": "<p>* Questions HH3 through AD3 comprise the six-item Short Module from which the Six-Item Food Security Scale can be calculated.</p>\n<p>&nbsp; --Raw score 0-1&mdash;High or marginal food security (raw score 1 may be considered marginal food security, but a large proportion of households that would be measured as having marginal food security using the household or adult scale will have raw score zero on the six-item scale)</p>\n<p>&nbsp; --Raw score 2-4&mdash;Low food security</p>\n<p>&nbsp; --Raw score 5-6&mdash;Very low food security</p>\n"
       },
       {
        "type": "html",
        "name": "question39",
        "html": "<p>* Questions CH1 through CH7 comprise the U.S. Children&rsquo;s Food Security Scale.</p>\n<p>&nbsp; --Raw score 0-1&mdash;High or marginal food security among children (raw score 1 may be considered marginal food security, but it is not certain that all households with raw score zero have high food security among children because the scale does not include an assessment of the anxiety component of food insecurity)</p>\n<p>&nbsp; --Raw score 2-4&mdash;Low food security among children</p>\n<p>&nbsp; --Raw score 5-8&mdash;Very low food security among children</p>\n"
       },
       {
        "type": "html",
        "name": "question18",
        "html": "<p><u><strong>(2) Response Options: For interviewer-administered surveys</strong></u>, DK (&ldquo;don&rsquo;t know&rdquo;) and &ldquo;Refused&rdquo; are blind responses&mdash;that is, they are not presented as response options, but marked if volunteered. For self-administered surveys, &ldquo;don&rsquo;t know&rdquo; is presented as a response option.</p>\n\n"
       },
       {
        "type": "html",
        "name": "question40",
        "html": "<p><u><strong>(3) Screening</strong></u>: The two levels of screening for adult-referenced questions and one level for child-referenced questions are provided for surveys in which it is considered important to reduce respondent burden. In pilot surveys intended to validate the module in a new cultural, linguistic, or survey context, screening should be avoided if possible and all questions should be administered to all respondents..</p>\n"
       },
       {
        "type": "html",
        "name": "question41",
        "html": "<p>To further reduce burden for higher income respondents, a preliminary screener may be constructed using question HH1 along with a household income measure. Households with income above twice the poverty threshold, AND who respond &lt;1&gt; to question HH1 may be skipped to the end of the module and classified as food secure. Use of this preliminary screener reduces total burden in a survey with many higher-income households, and the cost, in terms of accuracy in identifying food-insecure households, is not great. However, research has shown that a small proportion of the higher income households screened out by this procedure will register food insecurity if administered the full module. If question HH1 is not needed for research purposes, a preferred strategy is to omit HH1 and administer Adult Stage 1 of the module to all households and Child Stage 1 of the module to all households with children.</p>\n"
       },
       {
        "type": "html",
        "name": "question42",
        "html": "<p><u><strong>(4) 30-Day Reference Period</strong></u>: The questionnaire items may be modified to a 30-day reference period by changing the &ldquo;last 12-month&rdquo; references to &ldquo;last 30 days.&rdquo; In this case, items AD1a, AD5a, and CH5a must be changed to read as follows:&nbsp;</p>"
       },
       {
        "type": "text",
        "name": "AD1a/AD5a/CH5a [IF YES ABOVE, ASK] In the last 30 days, how many days did this happen?",
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "question43",
        "title": "The location selected below should indicate your physical location                                      ",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Texas"
         },
         {
          "value": "item2",
          "text": "California"
         },
         {
          "value": "item3",
          "text": "Ohio"
         },
         {
          "value": "item4",
          "text": "Utah"
         }
        ]
       },
       {
        "type": "text",
        "name": "question44",
        "title": "ZIP",
        "isRequired": true
       }
      ]
     }
    ]
   };




// export const surveyJson1 =
// {
//     efefefe
// }