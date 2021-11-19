<template>
  <div class="stepper">
    <span class="stepper__step-line line-active"></span>
    <div class="stepper__step" v-for="stepper of steppers" :key="stepper.num">
      <div class="stepper__step-circle" :class="{active: stepper.state === 'active', finished: stepper.state === 'finished'}">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="stepper.state === 'finished'">
          <path d="M5.99997 9.16994L1.82997 4.99994L0.409973 6.40994L5.99997 11.9999L16.5 1.49994L15.09 0.0899391L5.99997 9.16994Z" fill="white"/>
        </svg>
        <span class="stepper__step-circle--number" v-else> {{stepper.num}} </span>
      </div>
      <div class="stepper__step-title" :class="{active: stepper.state !== 'inactive'}"> {{stepper.title}} </div>
    </div>
    <span class="stepper__step-line" :class="{'line-active': initialCurrentForm !== 1}"></span>
  </div>
</template>

<script>
const stepperData = [{
  num: 1,
  title: '寄送地址',
  state: 'active'
}, {
  num: 2,
  title: '運送方式',
  state: 'inactive'
}, {
  num: 3,
  title: '付款資訊',
  state: 'inactive'
}]

export default {
  name: 'Stepper',
  props: {
    initialCurrentForm: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      steppers: [...stepperData]
    }
  },
  methods: {
    styleStepper () {
      this.steppers = this.steppers.map(stepper => {
        if (stepper.num < this.initialCurrentForm) {
          return {
            ...stepper,
            state: 'finished'
          }
        } else if (stepper.num === this.initialCurrentForm) {
          return {
            ...stepper,
            state: 'active'
          }
        } else {
          return {
            ...stepper,
            state: 'inactive'
          }
        }
      })
    }
  },
  watch: {
    initialCurrentForm () {
      this.styleStepper()
    }
  }
}
</script>

<style lang="scss">
.stepper {
  grid-area: stepper;
  position: relative;
  @include flexArrange(space-between, center);
  font-size: 1.6rem;
  &__step {
    @include flexArrange(false, center);
    &-circle {
      @include flexArrange(center, center);
      width: 2em;
      height: 2em;
      border-radius: 50%;
      border: 1px solid var(--step-inactive-color);
      color: var(--step-inactive-color);
    }
    &-title {
      display: none;
      @include breakpoint(33em) {
        display: block;
        margin-left: 0.8rem;
        color: var(--step-inactive-color);
      }
    }
    &-line {
      // display: block;
      position: absolute;
      left: 29%;
      transform: translateX(-50%);
      width: 15%;
      height: 0.1rem;
      background-color: var(--step-inactive-color);
      &:last-child {
        left: 71%;
      }
    }
  }
  @include md {
    font-size: 1.2rem;
  }
}

.line-active {
  background-color: var(--step-active-and-finished);
}

.active {
  color: var(--basic-color);
  border-color: var(--basic-color);
}

.finished {
  background-color: $gray-7;
  border: none;
}
</style>
