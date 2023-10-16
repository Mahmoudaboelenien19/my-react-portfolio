import React, {
  CSSProperties,
  useEffect,
  useState,
  useTransition,
} from "react";
import Header from "../widgets/Header";
import { projects } from "../../assets/Utils/Arr";
import Figure from "./Figure";
import Filters from "./Filters";
import Grid from "react-spinners/GridLoader";
import Container from "../widgets/Container";
import FadeINWrapper from "../widgets/FadeINWrapper";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};
const Projects = () => {
  const filters = ["all", ...new Set(projects.map((ob) => ob.tags).flat())];
  const [isPending, startTransition] = useTransition();
  const [filter, setfilter] = useState("all");
  const [dataShown, setDataShown] = useState(projects);

  useEffect(() => {
    if (filter === "all") {
      startTransition(() => {
        setDataShown(projects);
      });
    } else {
      startTransition(() => {
        setDataShown(projects.filter((ob) => ob.tags.includes(filter)));
      });
    }
  }, [filter]);
  return (
    <Container id="projects-home">
      <Header head="Portfolio" title="some of my recent works" />

      <Filters filters={filters} filter={filter} setFilter={setfilter} />
      <section className="fig-parent">
        <>
          {!isPending ? (
            <>
              {dataShown.map((ob, i) => {
                return (
                  <FadeINWrapper key={i} ind={i}>
                    <Figure {...ob} />
                  </FadeINWrapper>
                );
              })}
            </>
          ) : (
            <div className="grid-loader">
              <Grid
                color="var(--scroll)"
                cssOverride={override}
                loading={isPending}
                size={5}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </>
      </section>
    </Container>
  );
};

export default Projects;
