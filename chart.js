
      chartIt();
      async function chartIt() {
      const data = await getData();
      const ctx = document.getElementById('chart').getContext('2d');
      Chart.defaults.font.size = 16;
      
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.xs,
            datasets: [{
            label: 'No. of Covid Affected',
            data: data.ys,
            backgroundColor: [
                'rgba(153, 102, 255, 0.6)',],
            borderColor: [
                'rgba(153, 102, 255, 1)',],
            borderWidth: 1
         }
    
       ]
     },
     options: {
        plugins: {
            legend: {
                labels: {
                    
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
     
   });
      }
  
    async function getData() {
    const xs =[];
    const ys =[];
    const response = await fetch('district_wise.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);

    table.forEach(row => {

    const columns = row.split(',');
    const district = columns[3];
    xs.push(district);
    const affected = columns[4];
    ys.push(affected);
    console.log(district,affected);
    });
   return {xs,ys};
   }
