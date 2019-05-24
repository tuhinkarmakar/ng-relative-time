import { NgModule } from "@angular/core"
import { RelativeTimePipe } from "./pipes/relative-time.pipe"

/**
 * Declares and exports the `RelativeTimePipe`.
 *
 * @author Tuhin Karmakar <tuhin@tuhinkarmakar.me>
 * @export
 * @class RelativeTimeModule
 */
@NgModule({
	declarations: [RelativeTimePipe],
	exports     : [RelativeTimePipe],
})
export class RelativeTimeModule {

}
