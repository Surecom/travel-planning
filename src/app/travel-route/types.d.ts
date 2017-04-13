/**
 * Created by Andrei_Furs on 3/17/2017.
 */
import { TravelModel } from './models/travel.model';
import { CityExportModel } from './models/export.model';

interface FileReaderEventTarget extends EventTarget {
  result: string;
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}

interface IDBElements {
  json: CityExportModel[];
  travel: TravelModel;
}
