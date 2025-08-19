<script>

export default {
  name: "app-cancel-confirmation-dialog",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: this.modelValue,
    }
  },
  watch: {
    modelValue(newVal) {
      this.isOpen = newVal
    },
    isOpen(newVal){
      this.$emit('update:modelValue', newVal)
    }
  },
  methods: {
    $t,
    onNoClick(){
      this.isOpen = false
    },
    confirmCancel(){
      this.$emit('confirm')
      this.isOpen = false
    }
  }
}
</script>

<template>
  <Dialog v-model:visible="isOpen" :modal="true" :closable="false" header="" :style="{width:'30rem'}">
    <!--Title-->
    <div class="dialog-title">
      <i class="pi pi-exclamation-triangle" style="font-size: 1.75rem; color: var(--p-red-500)"></i>
      <span>{{$t('RenterHome.CancelConfirmationTitle')}}</span>
    </div>

    <p class="dialog-message">
      {{$t('RenterHome.CancelConfirmationMessage')}}
    </p>

    <template #footer>
      <Button
          :label="$t('RenterHome.KeepReservation')"
          class="p-button-text" @click="onNoClick"/>
      <Button
          :label="$t('RenterHome.ConfirmCancel')"
          severity="danger"
          @click="confirmCancel"/>
    </template>
  </Dialog>
</template>

<style scoped>
.dialog-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: var(--p-surface-900);
}

.dialog-message {
  color: var(--p-surface-600);
  line-height: 1.6;
  font-size: 1rem;
  padding: 0.5rem 0;
}
</style>