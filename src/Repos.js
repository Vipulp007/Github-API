import Column2d from './Column2d';
import Column3d from './Column3d';
import { useGlobalContext } from './context';
import Doughnut from './Doughnut';
import Pie3d from './Fusionchart';
function Repos() {
  const { repos } = useGlobalContext();
  const chart_data = repos.reduce((total, item) => {
    const { language, stargazers_count, name } = item;
    if (!language) return total;
    if (!total[language])
      total[language] = {
        label: `${language}`,
        value: 1,
        stars: stargazers_count,
      };
    else {
      total[language].value += 1;
      total[language].stars += stargazers_count;
    }
    console.log(total);
    return total;
  }, {});
  const chart_pop = repos.reduce((total, item) => {
    const { language, stargazers_count, name, forks } = item;
    if (!name) return total;
    if (!total[name])
      total[name] = {
        label: `${name}`,
        forks: forks,
        value: stargazers_count,
      };
    console.log(total);
    return total;
  }, {});
  var data = [];
  for (const item in chart_data) {
    data.push(chart_data[item]);
  }
  var namedata = [];
  var forkdata = [];
  for (const item in chart_pop) {
    namedata.push(chart_pop[item]);
    forkdata.push({
      label: chart_pop[item].label,
      value: chart_pop[item].forks,
    });
  }
  namedata.sort(function (a, b) {
    return b.value - a.value;
  });
  forkdata.sort(function (a, b) {
    return b.value - a.value;
  });
  const spl = data.map((item) => {
    return { label: item.label, value: item.stars };
  });
  namedata = namedata.slice(0, 5);
  forkdata = forkdata.slice(0, 5);
  return (
    <main>
      <div className='chart-container'>
        <Pie3d data={data} />
        <Column2d data={namedata} />
        <Doughnut data={spl} />
        <Column3d data={forkdata} />
      </div>
      <br />
      <br />
    </main>
  );
}
export default Repos;
