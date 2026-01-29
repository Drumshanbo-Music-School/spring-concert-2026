import React from 'react'
import './Charity.css'

const Charity = () => {
  return (
    <section className="charity-section" id="charity">
      <div className="charity-container">
        <div className="charity-logo">💚</div>
        <h2 className="charity-title">Supporting Sligo Cancer Care</h2>
        <div className="charity-divider"></div>
        <div className="charity-description">
          <p>
            All proceeds from this concert will benefit <strong>Sligo Cancer Care</strong>,
            a vital organization providing support, care, and resources to individuals and families
            affected by cancer in the Sligo community.
          </p>
          <p className="charity-details">
            Your attendance and generosity will help provide essential services including
            counseling, support groups, and practical assistance to those in need.
          </p>
          <div className="charity-thanks">
            <span className="thanks-icon">🌸</span>
            <span>Thank you for your support</span>
            <span className="thanks-icon">🌸</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Charity
