import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {TestTickComponent} from './test-tick/test-tick.component';
import {SimulatedPositionsComponent} from './gtfs/simulated-positions/simulated-positions.component';
import {ServerSideEventsService} from './server-side-events.service';
import {MapComponent} from './stamen/map/map.component';
import {mapCoordinatesReducer} from './reducers/map-coordinates.reducer';
import {MappedPositionsComponent} from './gtfs/mapped-positions/mapped-positions.component';
import {TopoJsonMapComponent} from './map/topo-json-map/topo-json-map.component';
import {StreamStatsComponent} from './gtfs/stream-stats/stream-stats.component';
import {streamStatsReducer} from "./reducers/steam-stats.reducer";
import {SimulatedPositionsPixiComponent} from './gtfs/simulated-positions-pixi/simulated-positions-pixi.component';
import {ClockComponent} from './gtfs/clock/clock.component';
import {latestSecondsOfDayReducer} from "./reducers/latest-seconds-of-day.reducer";
import {LatestSecondsOfDayService} from "./gtfs/latest-seconds-of-day.service";
import {PositionStoreService} from "./gtfs/position-store.service";
import {StreamStatsService} from "./gtfs/stream-stats.service";

@NgModule({
  declarations: [
    AppComponent,
    TestTickComponent,
    SimulatedPositionsComponent,
    MapComponent,
    MappedPositionsComponent,
    TopoJsonMapComponent,
    StreamStatsComponent,
    SimulatedPositionsPixiComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      mapCoordinates: mapCoordinatesReducer,
      streamStats: streamStatsReducer,
      latestSecondsOfDay: latestSecondsOfDayReducer
    })
  ],
  providers: [
    ServerSideEventsService,
    PositionStoreService,
    LatestSecondsOfDayService,
    StreamStatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
