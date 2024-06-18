import React from 'react'
import './features.css' 
import Feature from '../../components/feature/Feature'

const featuresData = [
  {
    title: "Purpose",
    text: "Reassess the original intentions behind your life insurance policy. Whether it's family protection, estate planning, or wealth transfer, we help ensure that your policy’s objectives are still in line with your current and future financial needs. Understanding the purpose of your coverage allows us to keep your financial strategy relevant and effective",
  },
  {
    title: "Performance",
    text: "Evaluate the financial health of your policy. We analyze how well your policy is performing by reviewing premium payments, cash value growth, and overall returns. This review helps verify that the policy remains cost-effective and continues to meet your financial goals under current economic conditions",

  },
  {
    title: "Possibilities",
    text: "Explore the strategic options available after the review. Depending on your policy’s purpose and performance, we might recommend continuing, adjusting, or even replacing your policy. Our guidance includes leveraging opportunities like the IRC 1035 exchange, which allows for a tax-free transfer to a more suitable policy, or considering the surrender of the policy for reinvestment purposes if it no longer serves its intended goals",

  
  },
];

const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          Features of Our Policy Review Process
        </h1>
        <p>
          Simplifying Life Insurance with Purpose, Performance, and
          Possibilities
        </p>
      </div>
      <div className="features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

export default Features