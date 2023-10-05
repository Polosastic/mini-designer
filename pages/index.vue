<template>
   <Header/>
   <div class="flex justify-center items-center m-10">
      <div class="list-container bg-gray-300 basis-1/4 flex flex-col items-center rounded-lg overflow-x-hidden oveflow-y-scroll scrollbar-hide h-48 w-20">
        <ul >
          <li v-for="color in colors" :key="color.name" class="bg-gray-100 border-gray-400 rounded-lg m-2.5 w-12 h-12 relative">
            <div @click ="" class="rounded-full w-9 h-9 absolute top-[12%] left-[12%]" :style=" {'background-color': color.color}"></div>
          </li>
        </ul>
      </div>
      <div class="relative basis-1/2 flex flex-col items-center">
        <svg
            width="300"
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
                style="fill:#93d50a;stroke-width:0.718645"
                d="m 21.065522,14.964613 v 0.46595 L 0.95758253,32.606161 10.161611,43.651197 21.065522,35.507798 V 69.341062 H 57.316154 57.48996 V 35.507299 L 68.393873,43.651197 77.598394,32.606161 57.48996,15.430065 v -0.465452 h -0.173806 z"/>
          </g>
        </svg>
      </div>
      <div class="list-container bg-gray-300 basis-1/4 flex flex-col rounded-lg items-center overflow-x-hidden oveflow-y-auto h-48 w-20">
        <ul>
          <li v-for="motive in motives" :key="motive.name" class="bg-gray-100 border-gray-400 rounded-lg m-2.5 w-12 h-12 relative">
              <div class="rounded-full w-9 h-9 absolute top-[18%] left-[16%]"> 
                <img v-bind:src=motive.img :alt="motive.name" width="30" height="40"> 
              </div> 
          </li>
        </ul>
      </div>
    </div>
  <Footer />
</template>
  
<script lang="ts">
 export default {
  setup() {
    const responseColors = useFetch(
      "/api/colors"
    );
    const responseMotives = useFetch(
      "/api/motives"
    );
    return { 
      colors: responseColors.data,
      motives: responseMotives.data
    };
  }
};
</script>
<style lang="css" scoped>
  .list-container::-webkit-scrollbar {
  width: 8px; /* Adjust the width as needed */
}
.list-container::-webkit-scrollbar-thumb {
  background-color: transparent; /* Hide the thumb */
}
</style>