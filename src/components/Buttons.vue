<template>
  <div class="btns">
    <button class="btn btns__prev" :class="{disabled: currentForm === 1}" @click.stop.prevent="toPrevForm">
      <div class="btns__prev-icon">
        <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.85981 0.116733C5.6729 -0.0389109 5.36985 -0.0389109 5.18293 0.116733L0.140187 4.31579L0.0840028 4.37195C-0.0467075 4.53002 -0.0245865 4.74876 0.148335 4.88605L5.19108 8.88989L5.25866 8.93468C5.44823 9.03856 5.70562 9.01808 5.86777 8.87648L5.92156 8.8202C6.04631 8.66236 6.02172 8.44802 5.85166 8.31301L1.67891 5H20.0238L20.1094 4.99194C20.3315 4.94961 20.5 4.74546 20.5 4.5C20.5 4.22386 20.2868 4 20.0238 4H1.87229L5.85981 0.680368L5.91519 0.625171C6.04442 0.469841 6.02596 0.255083 5.85981 0.116733Z" fill="black"/>
        </svg>
      </div>
      <span class="btns__prev-text">上一步</span>
    </button>
    <button class="btn btns__next" type="submit" v-if="currentForm === 3">
      <span class="btns__next-text">確認訂單</span>
    </button>
    <button class="btn btns__next" type="submit" v-else-if="!isFirstFormFinished">
      <span class="btns__next-text">下一步</span>
      <div class="btns__next-icon">
        <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6402 0.116733C14.8271 -0.0389109 15.1302 -0.0389109 15.3171 0.116733L20.3598 4.31579L20.416 4.37195C20.5467 4.53002 20.5246 4.74876 20.3517 4.88605L15.3089 8.88989L15.2413 8.93468C15.0518 9.03856 14.7944 9.01808 14.6322 8.87648L14.5784 8.8202C14.4537 8.66236 14.4783 8.44802 14.6483 8.31301L18.8211 5H0.476191L0.390594 4.99194C0.168451 4.94961 0 4.74546 0 4.5C0 4.22386 0.213198 4 0.476191 4H18.6277L14.6402 0.680368L14.5848 0.625171C14.4556 0.469841 14.474 0.255083 14.6402 0.116733Z" fill="white"/>
        </svg>
      </div>
    </button>
    <button class="btn btns__next" type="submit" @click.stop.prevent="toNextForm" v-else>
      <span class="btns__next-text">下一步</span>
      <div class="btns__next-icon">
        <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6402 0.116733C14.8271 -0.0389109 15.1302 -0.0389109 15.3171 0.116733L20.3598 4.31579L20.416 4.37195C20.5467 4.53002 20.5246 4.74876 20.3517 4.88605L15.3089 8.88989L15.2413 8.93468C15.0518 9.03856 14.7944 9.01808 14.6322 8.87648L14.5784 8.8202C14.4537 8.66236 14.4783 8.44802 14.6483 8.31301L18.8211 5H0.476191L0.390594 4.99194C0.168451 4.94961 0 4.74546 0 4.5C0 4.22386 0.213198 4 0.476191 4H18.6277L14.6402 0.680368L14.5848 0.625171C14.4556 0.469841 14.474 0.255083 14.6402 0.116733Z" fill="white"/>
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
    initialCurrentForm: {
      type: Number,
      default: 1
    },
    formResult: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      currentForm: 1
    }
  },
  methods: {
    toNextForm () {
      if (this.currentForm === 3) {
        this.currentForm = 3
      } else {
        this.currentForm++
      }
      this.$emit('update-form', this.currentForm)
      this.toFormRouter()
    },
    toPrevForm () {
      this.currentForm--
      this.$emit('update-form', this.currentForm)
      this.toFormRouter()
    },
    toFormRouter () {
      this.$router.push({
        path: `/users/1/checkout/${this.currentForm}`
      })
    },
    fetchCurrentForm () {
      this.currentForm = this.initialCurrentForm
    }
  },
  watch: {
    initialCurrentForm () {
      this.fetchCurrentForm()
    }
  },
  created () {
    this.fetchCurrentForm()
  },
  computed: {
    isFirstFormFinished () {
      return !!((this.formResult.username.length && this.formResult.phone.length && this.formResult.email.length && this.formResult.city.length && this.formResult.addr.length))
    }
  }
}
</script>

<style lang="scss">
.btns {
  grid-area: buttons;
  padding-top: 2.4rem;
  margin-bottom: 4rem;
  border-top: 2px solid var(--cart-button-divider);
  @include flexArrange(space-between, center);
  &__prev,
  &__next {
    width: 15rem;
    @include flexArrange(center);
    cursor: pointer;
    border: none;
    padding: 1rem 3rem;
    border-radius: 0.8rem;
    @include sm {
      width: 17rem;
    }
    &-icon {
      width: 2.4rem;
      height: 2.4rem;
      @include flexArrange(false, center);
    }
  }
  &__prev {
    color: var(--basic-color);
    background-color: transparent;
    &-icon {
      margin-right: 1.2rem;
    }
  }
  &__next {
    background-color: $main-button-color;
    color: white;
    &-text {
      margin-right: 1.2rem;
    }
  }
  .disabled {
    display: none;
    + .btns__next {
      width: 100%;
    }
    @include md {
      display: flex;
      visibility: hidden;
      + .btns__next {
        width: 17rem;
      }
    }
  }
}
</style>
