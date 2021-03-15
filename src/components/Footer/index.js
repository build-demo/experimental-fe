import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <Row type="flex" justify="end" style={{paddingRight: "5rem"}}>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/build-demo/unblockme"
                  src="github.svg"
                />
              </S.FooterContainer>
              </Row>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
