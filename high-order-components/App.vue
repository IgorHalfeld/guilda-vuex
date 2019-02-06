<template>
  <div class="container">
    <div class="container-title">
      <withFee>
        <template slot-scope="{ fee }">
          <h1>{{ totalValue * fee | brazilianLocale }}</h1>
          <small>with fee {{ fee | brazilianLocale }}</small>
        </template>        
      </withFee>
    </div>  
  </div>  
</template>

<script>
import withFee from './withFee';

export default {
  name: 'App',
  components: { withFee },
  filters: {
    brazilianLocale(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' });
    } 
  },
  data: () => ({
    totalValue: 10,
  }),
}
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; };

html,
body {
  width: 100vw;
  height: 100vh;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-title h1 {
  color: tomato;
  font-size: 80px;
  font-weight: 700;
  font-family: Montserrat;
  margin-bottom: 0px;
}
.container-title small {
  color: #444;
  font-size: 40px;
  font-weight: 300;
  font-family: Montserrat;
}
</style>
