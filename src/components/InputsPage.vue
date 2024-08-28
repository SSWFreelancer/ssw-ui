<template>
  <div>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2 flex flex-col gap-4">
        <div class="card flex flex-col gap-4 p-4 rounded-md bg-secondary">
          <div class="font-semibold text-xl">InputText</div>
          <div class="flex flex-col md:flex-row gap-4">
            <InputText type="text" placeholder="Default" />
            <InputText type="text" placeholder="Disabled" :disabled="true" />
          </div>
          <div class="font-semibold text-xl">Textarea</div>
          <Textarea
            placeholder="Your Message"
            :autoResize="true"
            rows="3"
            cols="30"
          />

          <div class="font-semibold text-xl">AutoComplete</div>
          <Autocomplete
            v-model="selectedAutoValue"
            :suggestions="autoFilteredValue"
            optionLabel="name"
            placeholder="Search"
            dropdown
            multiple
            display="chip"
            @complete="searchCountry($event)"
          />
          <div class="font-semibold text-xl">InputNumber</div>
          <InputNumber
            v-model="inputNumberValue"
            showButtons
            mode="decimal"
          ></InputNumber>
        </div>

        <div class="card flex flex-col gap-4 p-4 rounded-md bg-secondary">
          <div class="font-semibold text-xl">Slider</div>
          <InputText v-model.number="sliderValue" />
          <Slider v-model="sliderValue" />

          <div class="flex flex-row mt-6">
            <div class="flex flex-col gap-4 w-1/2">
              <div class="font-semibold text-xl">Rating</div>
              <Rating v-model="ratingValue" :stars="5" />
            </div>
            <div class="flex flex-col gap-4 w-1/2">
              <div class="font-semibold text-xl">ColorPicker</div>
              <ColorPicker style="width: 2rem" v-model="colorValue" />
            </div>
          </div>

          <div class="font-semibold text-xl">Knob</div>
          <Knob
            v-model="knobValue"
            :step="10"
            :min="-50"
            :max="50"
            valueTemplate="{value}%"
          />
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col gap-4">
        <div class="card flex flex-col gap-4 p-4 rounded-md bg-secondary">
          <div class="font-semibold text-xl">RadioButton</div>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex items-center">
              <RadioButton
                id="option1"
                name="option"
                value="Chicago"
                v-model="radioValue"
              />
              <label for="option1" class="leading-none ml-2">Chicago</label>
            </div>
            <div class="flex items-center">
              <RadioButton
                id="option2"
                name="option"
                value="Los Angeles"
                v-model="radioValue"
              />
              <label for="option2" class="leading-none ml-2">Los Angeles</label>
            </div>
            <div class="flex items-center">
              <RadioButton
                id="option3"
                name="option"
                value="New York"
                v-model="radioValue"
              />
              <label for="option3" class="leading-none ml-2">New York</label>
            </div>
          </div>

          <div class="font-semibold text-xl">Checkbox</div>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex items-center">
              <Checkbox
                id="checkOption1"
                name="option"
                value="Chicago"
                v-model="checkboxValue"
              />
              <label for="checkOption1" class="ml-2">Chicago</label>
            </div>
            <div class="flex items-center">
              <Checkbox
                id="checkOption2"
                name="option"
                value="Los Angeles"
                v-model="checkboxValue"
              />
              <label for="checkOption2" class="ml-2">Los Angeles</label>
            </div>
            <div class="flex items-center">
              <Checkbox
                id="checkOption3"
                name="option"
                value="New York"
                v-model="checkboxValue"
              />
              <label for="checkOption3" class="ml-2">New York</label>
            </div>
          </div>

          <div class="font-semibold text-xl">ToggleSwitch</div>
          <ToggleSwitch v-model="switchValue" />
        </div>

        <div class="card flex flex-col gap-4 p-4 rounded-md bg-secondary">
          <div class="font-semibold text-xl">Listbox</div>
          <Listbox
            v-model="listboxValue"
            :options="listboxValues"
            optionLabel="name"
            :filter="true"
          />

          <div class="font-semibold text-xl">Select</div>
          <Select
            v-model="dropdownValue"
            :options="dropdownValues"
            optionLabel="name"
            placeholder="Select"
          />

          <div class="font-semibold text-xl">MultiSelect</div>
          <MultiSelect
            v-model="multiselectValue"
            :options="multiselectValues"
            optionLabel="name"
            placeholder="Select Countries"
            :filter="true"
          >
            <template #value="slotProps">
              <div
                class="inline-flex items-center py-1 px-2 bg-primary text-primary-contrast rounded-border mr-2"
                v-for="option of slotProps.value"
                :key="option.code"
              >
                <span
                  :class="'mr-2 flag flag-' + option.code.toLowerCase()"
                  style="width: 18px; height: 12px"
                />
                <div>{{ option.name }}</div>
              </div>
              <template v-if="!slotProps.value || slotProps.value.length === 0">
                <div class="p-1">Select Countries</div>
              </template>
            </template>
            <template #option="slotProps">
              <div class="flex items-center">
                <span
                  :class="
                    'mr-2 flag flag-' + slotProps.option.code.toLowerCase()
                  "
                  style="width: 18px; height: 12px"
                />
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </MultiSelect>
        </div>

        <div class="card flex flex-col gap-4 p-4 rounded-md bg-secondary">
          <div class="font-semibold text-xl">ToggleButton</div>
          <ToggleButton
            v-model="toggleValue"
            onLabel="Yes"
            offLabel="No"
            :style="{ width: '10em' }"
          />

          <div class="font-semibold text-xl">SelectButton</div>
          <SelectButton
            v-model="selectButtonValue"
            :options="selectButtonValues"
            optionLabel="name"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CountryService } from "@/service/CountryService";

import InputText from "primevue/inputtext";
import Select from "primevue/selectbutton";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import Checkbox from "primevue/checkbox";
import ToggleButton from "primevue/togglebutton";
import SelectButton from "primevue/selectbutton";
import ToggleSwitch from "primevue/inputswitch";
import Listbox from "primevue/listbox";
import MultiSelect from "primevue/multiselect";
import Textarea from "primevue/textarea";
import RadioButton from "primevue/radiobutton";
import Autocomplete from "primevue/autocomplete";
import Slider from "primevue/slider";
import Rating from "primevue/rating";
import ColorPicker from "primevue/colorpicker";
import Knob from "primevue/knob";
@Component({
  components: {
    Knob,
    ColorPicker,
    Rating,
    Slider,
    RadioButton,
    Autocomplete,
    InputText,
    Textarea,
    InputNumber,
    Button,
    Checkbox,
    ToggleButton,
    SelectButton,
    ToggleSwitch,
    Listbox,
    Select,
    MultiSelect,
  },
})
export default class InputsPage extends Vue {
  autoValue: any[] = [];
  selectedAutoValue: any = null;
  autoFilteredValue: any[] = [];
  inputNumberValue: any = null;
  sliderValue: number = 50;
  ratingValue: any = 5;
  colorValue: string = "#1976D2";
  radioValue: any = null;
  checkboxValue: any[] = [];
  switchValue: boolean = false;
  listboxValues: any[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  listboxValue: any = null;
  dropdownValues: any[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  dropdownValue: any = null;
  multiselectValues: any[] = [
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" },
  ];
  multiselectValue: any = null;
  toggleValue: boolean = false;
  selectButtonValue: any = null;
  selectButtonValues: any[] = [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
  ];
  knobValue: number = 50;

  // Хук mounted
  mounted() {
    CountryService.getCountries().then((data) => {
      this.autoValue = data;
    });
  }

  // Метод для поиска страны
  searchCountry(event: any) {
    setTimeout(() => {
      if (!event.query.trim().length) {
        this.autoFilteredValue = [...this.autoValue];
      } else {
        this.autoFilteredValue = this.autoValue.filter((country: any) => {
          return country.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }
    }, 250);
  }
}
</script>
