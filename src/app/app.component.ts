import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { GetJsonService } from './get-json.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
	 providers: [GetJsonService]
})
export class AppComponent {

	showSubNavCatalogo: Boolean = false;
	catalogo: any;

    constructor(private router: Router, private downloadJson: GetJsonService) {

this.downloadJson.getData("https://public.boxcloud.com/d/1/lduefMlU2TN7dh4msWQJKQMoPEfRSMZ1YplPzMb-ofaN9BSOxxkXBSdF2hM8aav230aWeG9DS7fQ_lWjMlOwNmWjpjJao1K9ok68G07c4RbAub6bPZeQ5KsO16V1YU3Tj5zKa7PxyT5aftnUViCOoSe5C3VXtffUOeSodRqMXufEz1l3tTU96DChkbukZ9vEs5616OayFTFXmJSo_k8t_XZKXddel4zvyMW9OlvsrPqVMmi0p53hAjiVCzC4yqynfgnOg7cZKDCv64h_L3nn6sNCbLaxlewzwXKF7Dw15jIJqDR-awLYeARKHDqjYsvi0-oIeQymkf8HHTuewGkiDwpeeZqhZJEHRE5MAXdMPAAaliMleotNz_2GUJ4lKpzBobiFtR-ES0VV_cpapDzKBQfXJLpKLnFJzkBqsyQM5pN-0FlQu4b_LydtMotbJXbT-W9QuYqop90ZdVUDfsdE7Za7v7Dvyr3Z9Ck7_JeSpVdpCiZ1fAzxFw_QXFHXxRVyGiIj-EChbpOg15k43h_oJhb4iLpphMRQIhjVOW7mozqtIx6zi-U1iPD8UPS_SDRBltvCAGulM9gzRpl5yBZsekMSml8-7rCInWP-F4sat2bVuJo5WtT05QViYEnspDTmXmb9NXxDEQqbRO-nnd-GmP_I2qZln6CQM0rSvhh4ZI3Ke6EisZDlZxxtsZCoBlEbjUoLVUy7Uf2Y-7GpNnsw8hrz1-pzfXa4YkiVJMTPRezxQ_ztyG7WmEqgVxMLDlRyearuVbBAOG7usA7vcKiqqV5AkQk6K91hYTZwr1H53PNSr6MYbCzueXuiGbID2ZK95lxEWNPCfJpmQThuZWUgVEprj-v2Q75Z81adbsPVMbnoyUhG-e0aza5QQk_dBtwhFtdNRZu8664aNlvz_zU3_hynOWC79gWRNwApOn9cwuh4p5WHjJPenheztMTv10ZdKivgIykfjsUoxwbVkFxt14rG2CIps6VedyrVELhvPtTNpyUZmvsLm5A8SGDJXNU9e351qa3LeD1AgF-RD2T5SmfHpeLkXhm4_PMcewvckHsIdMySOlraaZL51LjBcYjzm_rNcIa9ddYwuMiWdIjlT7n2ZgiBcKnfEw../download").subscribe((data) => {
  this.catalogo = data;


});

		// this.http.get("../json/biblioteca_lNostPais.json").map(res => res.json()).subscribe(data => this.catalogo = data);

    }

	


}
