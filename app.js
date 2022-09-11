// https://www.omnicalculator.com/finance/phillips-curve

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const changeinunemploymentrateRadio = document.getElementById('changeinunemploymentrateRadio');
const percentagerateofmoneywagegrowthRadio = document.getElementById('percentagerateofmoneywagegrowthRadio');
const trendrateofgrowthofmoneywagesRadio = document.getElementById('trendrateofgrowthofmoneywagesRadio');

let changeinunemploymentrate;
let percentagerateofmoneywagegrowth = v1;
let trendrateofgrowthofmoneywages = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

changeinunemploymentrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Percentage rate of money wage growth';
  variable2.textContent = 'Trend rate of growth of money wages';
  percentagerateofmoneywagegrowth = v1;
  trendrateofgrowthofmoneywages = v2;
  result.textContent = '';
});

percentagerateofmoneywagegrowthRadio.addEventListener('click', function() {
  variable1.textContent = 'Change in unemployment rate';
  variable2.textContent = 'Trend rate of growth of money wages';
  changeinunemploymentrate = v1;
  trendrateofgrowthofmoneywages = v2;
  result.textContent = '';
});

trendrateofgrowthofmoneywagesRadio.addEventListener('click', function() {
  variable1.textContent = 'Change in unemployment rate';
  variable2.textContent = 'Percentage rate of money wage growth';
  changeinunemploymentrate = v1;
  percentagerateofmoneywagegrowth = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(changeinunemploymentrateRadio.checked)
    result.textContent = `Change in unemployment rate = ${computechangeinunemploymentrate().toFixed(2)}`;

  else if(percentagerateofmoneywagegrowthRadio.checked)
    result.textContent = `Percentage rate of money wage growth = ${computepercentagerateofmoneywagegrowth().toFixed(2)}`;

  else if(trendrateofgrowthofmoneywagesRadio.checked)
    result.textContent = `Trend rate of growth of money wages = ${computetrendrateofgrowthofmoneywages().toFixed(2)}`;
})

// calculation

function computechangeinunemploymentrate() {
  return Number(trendrateofgrowthofmoneywages.value) - Number(percentagerateofmoneywagegrowth.value);
}

function computepercentagerateofmoneywagegrowth() {
  return Number(trendrateofgrowthofmoneywages.value) - Number(changeinunemploymentrate.value);
}

function computetrendrateofgrowthofmoneywages() {
  return Number(changeinunemploymentrate.value) + Number(percentagerateofmoneywagegrowth.value);
}