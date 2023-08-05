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
    <section id="projects-home">
      <Header head="Portfolio" />

      <Filters filters={filters} filter={filter} setFilter={setfilter} />
      <section className="fig-parent">
        <>
          {!isPending ? (
            <>
              {dataShown.map((ob, i) => {
                return <Figure key={i} {...ob} i={i} len={dataShown.length} />;
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
    </section>
  );
};

export default Projects;
