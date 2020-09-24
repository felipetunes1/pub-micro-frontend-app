export class DispatcherModel {
   _id: string;
   codeTmp: number = 0;
   method: string = '';
	oldVersionMs: boolean = false;
	internalUrl: string = '';
	externalUrl: string;

   header: string;
	body: string;

	isFluxoXml: boolean = false;
   removeAddAttribute: boolean;
   responseWithAttribute: boolean;
   cdataInsertion: string;
	cdataEnvelope: string;
	bodyOutXml: string;

   headerOut: string;
	bodyOut: string;

   headerOutError: string;
	bodyOutError: string;

}