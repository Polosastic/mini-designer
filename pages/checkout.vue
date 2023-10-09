<template>
  <Header />
  <div>
    <button @click="$router.go(-1)" class='back-button bg-lime-500 text-white text-center rounded-md h-10 w-14 m-4'>Back</button>
  <div class="checkout-container flex flex-wrap justify-center items-center pb-10 m-10 max-sm:flex-col">
    <div class="order-data bg-gray-300 basis-2/3 flex flex-col items-center rounded-lg h-48 max-w-lg max-sm:flex-row max-sm:w-1/3 m-6">
      <h2 class="font-extrabold">Order Data</h2>
      <div class="flex justify-center">
        <div class="ready-look relative basis-1/2 -mt-16 mr-32">
          <svg
            width="200"
            height="300"
            viewBox="0 0 79.375002 79.374999"
            version="1.1"
            id="svg1"
            inkscape:version="1.3 (0e150ed, 2023-07-21)"
            sodipodi:docname="shirt.svg"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <sodipodi:namedview
              id="namedview1"
              pagecolor="#ffffff"
              bordercolor="#666666"
              borderopacity="1.0"
              inkscape:showpageshadow="2"
              inkscape:pageopacity="0.0"
              inkscape:pagecheckerboard="0"
              inkscape:deskcolor="#d1d1d1"
              inkscape:document-units="mm"
              showgrid="true"
              inkscape:zoom="1.7903361"
              inkscape:cx="213.36776"
              inkscape:cy="173.43112"
              inkscape:window-width="1776"
              inkscape:window-height="738"
              inkscape:window-x="2248"
              inkscape:window-y="393"
              inkscape:window-maximized="0"
              inkscape:current-layer="layer1">
              <inkscape:grid
                id="grid1"
                units="px"
                originx="0"
                originy="0"
                spacingx="0.26458333"
                spacingy="0.26458334"
                empcolor="#0099e5"
                empopacity="0.30196078"
                color="#0099e5"
                opacity="0.14901961"
                empspacing="5"
                dotted="false"
                gridanglex="30"
                gridanglez="30"
                visible="true"/>
            </sodipodi:namedview>
            <defs
              id="defs1"/>
            <g
              inkscape:label="Layer 1"
              inkscape:groupmode="layer"
              id="layer1">
              <path
                id="rect1"
                :style="{fill:designStore.selectedColor?.color}" style ="stroke-width:0.718645 "
                d="m 21.065522,14.964613 v 0.46595 L 0.95758253,32.606161 10.161611,43.651197 21.065522,35.507798 V 69.341062 H 57.316154 57.48996 V 35.507299 L 68.393873,43.651197 77.598394,32.606161 57.48996,15.430065 v -0.465452 h -0.173806 z"/>
            </g>
          </svg>
          <div class="overlay w-9 h-9 absolute top-[48%] left-[39%] bg-gray-100">
            <img :src=designStore.selectedMotive?.img :alt="designStore.selectedMotive?.name" class="absolute top-[9%] left-[9%]" width="30" height="40"> 
          </div>
        </div>
        <div class="order-info basis-1/2 h-60">
          <div class="desing-info m-2">
            <div class="motive-name">Motive : {{ selectedMotive?.name }}</div>
            <div class="color-name">Color : {{ selectedColor?.name }}</div>
          </div>
          <div class="design-price bg-white rounded-md p-2">
            <div class="motive-price font-semibold">Motive : {{ selectedMotive?.price }} Euro</div>
            <div class="color-price font-semibold">Color : {{ selectedColor?.price }} Euro</div>
            <hr class="bg-black">
            <div class="sum font-semibold">Sum: {{ sum }} Euro</div>
          </div>
        </div>      
      </div>
    </div>
    <div class="personal-data bg-gray-300 basis-1/4 flex flex-col max-w-lg rounded-lg items-center  h-48 max-sm:flex-row max-sm:w-1/3">
      <h2 class="font-extrabold">Personal Data</h2>
      <form class="flex flex-wrap flex-row justify-center">
        <input class="m-4 rounded-md border-2 border-black" type="text" name="Name" id="name" placeholder=" Name">
        <input class="m-4 rounded-md border-2 border-black" type="email" name="Address" id="address" placeholder=" Address">
      </form>
    </div>
  </div>
  <button @click="" type="submit" class='buy-button bg-lime-500 text-white text-center rounded-md h-10 w-14 m-4 float-right'>Buy</button>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useDesignStore } from '~/stores/design';
const designStore = useDesignStore();
const { selectedColor,selectedMotive, sum } = storeToRefs(designStore);
</script>



<style>

</style>
