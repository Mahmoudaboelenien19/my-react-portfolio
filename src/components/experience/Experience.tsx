import Header from "../widgets/shared/Header";
import { Fragment } from "react";
import Container from "../widgets/shared/Container";
import FadeINWrapper from "../widgets/animation/FadeINWrapper";
import "./../../styles/pages/_experience.scss";
const Experience = () => {
  return (
    <Fragment>
      <Container id="experience" className="experience-section">
        <Header head="Experience" title="where i worked before" />
        <FadeINWrapper>
          <h3 className="experience-role">Frontend Developer – INNOVA</h3>
          <p className="experience-date">Feb 2024 – Present (Remote)</p>

          <p className="experience-summary">
            Building enterprise admin platforms and mobile dashboards for
            government and municipal systems.
          </p>

          <div className="experience-projects">
            <h4>Key Projects & Responsibilities</h4>
            <ul>
              <li>
                CMS Dashboard (Feb 2025 – Present): correspondence management,
                SLA tracking, task‐based inbox, org-unit setup.
              </li>
              <li>
                IBaladia Mobile Migration (Oct 2024 – Jan 2025): React Native
                app for municipal inspectors; data entry modules for permits,
                violations, health licensing.
              </li>
              <li>
                Ads & Health License Demo (Mar 2024 – Oct 2024): Angular + Zorro
                Antd system for Kuwait Municipality; dynamic fee calc, doc
                upload, multi-duration licenses.
              </li>
              <li>
                Jobs Promotion App (Jul 2024 – Sep 2024): Angular front-end for
                employee promotion requests, document attachments, admin
                controls.
              </li>
              <li>
                SEMAK Dashboard (Feb 2024 – Jun 2024): Angular KPI & performance
                tracker, holiday scheduler, role-based task management.
              </li>
            </ul>
          </div>

          {/* Tech stack footer */}
          <div className="experience-tech">
            <h4>Technologies</h4>
            <p>
              React · Angular · React Native · TypeScript · SASS · Framer Motion
              · Zorro Antd
            </p>
          </div>
        </FadeINWrapper>
      </Container>
    </Fragment>
  );
};

export default Experience;
