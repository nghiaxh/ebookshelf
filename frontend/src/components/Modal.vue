<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="text-xl font-bold">{{ modal_title }}</h3>
      <p class="py-4 font-semibold text-lg text-center">{{ modal_message }}</p>
      <div class="modal-action flex justify-center">
        <form method="dialog">
          <button class="btn btn-neutral text-base hover:scale-[1.01] lg:text-base">{{ modal_confirm_text }}</button>
        </form>
      </div>
    </div>
  </dialog>
</template>