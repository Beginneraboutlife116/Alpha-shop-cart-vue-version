<template>
  <div class="stepper">
    <span class="stepper__step-line line-active"></span>
    <div class="stepper__step" v-for="(stepper, index) of steppers" :key="index">
      <div class="stepper__step-circle">
        <span class="stepper__step-circle--number"> {{index + 1}} </span>
      </div>
      <div class="stepper__step-title"> {{stepper}} </div>
    </div>
    <span class="stepper__step-line"></span>
  </div>
</template>

<script>
const stepperData = ['寄送地址', '運送方式', '付款資訊']

export default {
  name: 'Stepper',
  data () {
    return {
      steppers: [...stepperData]
    }
  }
}
</script>

<style lang="scss">
@import '../scss/components/Stepper.scss';
</style>
