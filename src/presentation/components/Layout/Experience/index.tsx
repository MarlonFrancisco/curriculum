import { ContextBlock, Timeline } from "@/presentation/components";

import * as S from "./style";

const experiences = [
  {
    period: "09/2020 - Atualmente",
    company: "WEBMOTORS",
    office: "Front-end developer",
    children: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
    hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet
    vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
    laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
    nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris
    non felis mollis faucibus.`,
  },
  {
    period: "04/2020 - 09/2020",
    company: "VORTTEX",
    office: "Front-end developer",
    children: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
    hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet
    vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
    laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
    nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris
    non felis mollis faucibus.`,
  },
  {
    period: "08/2019 - 03/2020",
    company: "VTEX",
    office: "Front-end Intern Developer",
    children: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
    hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet
    vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
    laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
    nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris
    non felis mollis faucibus.`,
  },
  {
    period: "04/2019 - 10/2019",
    company: "BIGGY",
    office: "Front-end Intern Developer",
    children: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
    hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet
    vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
    laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
    nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris
    non felis mollis faucibus.`,
  },
];

const Experience = () => {
  return (
    <S.Container id="exp">
      <ContextBlock
        title="EXPERIÊNCIA"
        subtitle="Codei por ai rs."
        bg="primary"
      />
      <S.Content>
        <Timeline events={experiences} />
      </S.Content>
    </S.Container>
  );
};

export default Experience;
