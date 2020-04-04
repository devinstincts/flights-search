
import PropTypes from 'prop-types';

const Currency = PropTypes.shape({
  Code: PropTypes.string.isRequired,
  DecimalDigits: PropTypes.number.isRequired,
  DecimalSeparator: PropTypes.string.isRequired,
  RoundingCoefficient: PropTypes.number.isRequired,
  SpaceBetweenAmountAndSymbol: PropTypes.bool.isRequired,
  Symbol: PropTypes.string.isRequired,
  SymbolOnLeft: PropTypes.bool,
  ThousandsSeparator: PropTypes.string.isRequired,
});

const Place = PropTypes.shape({
  Id: PropTypes.number.isRequired,
  Code: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  ParentId: PropTypes.number,
  Type: PropTypes.string.isRequired,
});

const Query = PropTypes.shape({
  Adults: PropTypes.number.isRequired,
  CabinClass: PropTypes.string.isRequired,
  Children: PropTypes.number.isRequired,
  Country: PropTypes.string.isRequired,
  Currency: PropTypes.string.isRequired,
  DestinationPlace: Place.isRequired,
  GroupPricing: PropTypes.bool,
  InboundDate: PropTypes.string.isRequired,
  Infants: PropTypes.number.isRequired,
  Locale: PropTypes.string.isRequired,
  LocationSchema: PropTypes.string,
  OriginPlace: Place.isRequired,
  OutboundDate: PropTypes.string.isRequired,
});

const BookingDetails = PropTypes.shape({
  Body: PropTypes.string,
  Method: PropTypes.string,
  Uri: PropTypes.string,
});

const Agent = PropTypes.shape({
  Id: PropTypes.number.isRequired,
  ImageUrl: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  OptimisedForMobile: PropTypes.bool,
  Status: PropTypes.string,
  Type: PropTypes.string,
});

const PricingOption = PropTypes.shape({
  Agents: PropTypes.arrayOf(Agent).isRequired,
  DeeplinkUrl: PropTypes.string,
  Price: PropTypes.number.isRequired,
  QuoteAgeInMinutes: PropTypes.number.isRequired,
});

const Carrier = PropTypes.shape({
  Id: PropTypes.number.isRequired,
  Code: PropTypes.string.isRequired,
  DisplayCode: PropTypes.string.isRequired,
  ImageUrl: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
});

const FlightNumber = PropTypes.shape({
  Carrier: Carrier.isRequired,
  CarrierId: PropTypes.number,
  FlightNumber: PropTypes.string.isRequired,
});

const Segment = PropTypes.shape({
  ArrivalDateTime: PropTypes.string.isRequired,
  Carrier: Carrier.isRequired,
  CarrierId: PropTypes.number,
  DepartureDateTime: PropTypes.string.isRequired,
  DestinationStation: Place.isRequired,
  DestinationStationId: PropTypes.number,
  Directionality: PropTypes.string.isRequired,
  Duration: PropTypes.number.isRequired,
  FlightNumber: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired,
  JourneyMode: PropTypes.string.isRequired,
  OperatingCarrier: Carrier.isRequired,
  OperatingCarrierId: PropTypes.number,
  OriginStation: Place.isRequired,
  OriginStationId: PropTypes.number,
});

const Leg = PropTypes.shape({
  Arrival: PropTypes.string.isRequired,
  CarrierIds: PropTypes.arrayOf(PropTypes.number),
  Carriers: PropTypes.arrayOf(Carrier).isRequired,
  Departure: PropTypes.string.isRequired,
  DestinationStation: Place.isRequired,
  DestinationStationId: PropTypes.number,
  OriginStation: Place.isRequired,
  OriginStationId: PropTypes.number,
  Directionality: PropTypes.string.isRequired,
  FlightNumbers: PropTypes.arrayOf(FlightNumber).isRequired,
  Id: PropTypes.string.isRequired,
  JourneyMode: PropTypes.string.isRequired,
  OperatingCarrierIds: PropTypes.arrayOf(PropTypes.number),
  OperatingCarriers: PropTypes.arrayOf(Carrier).isRequired,
  SegmentIds: PropTypes.arrayOf(PropTypes.number),
  Segments: PropTypes.arrayOf(Segment).isRequired,
  StopIds: PropTypes.arrayOf(PropTypes.number),
  Stops: PropTypes.arrayOf(Place).isRequired,
});

const Itinerary = PropTypes.shape({
  BookingDetailsLink: BookingDetails.isRequired,
  InboundLegId: PropTypes.string,
  OutboundLegId: PropTypes.string,
  PricingOptions: PropTypes.arrayOf(PricingOption).isRequired,
  inboundLeg: Leg.isRequired,
  outboundLeg: Leg.isRequired,
});

const SearchResults = PropTypes.shape({
  Currencies: PropTypes.arrayOf(Currency).isRequired,
  Itineraries: PropTypes.arrayOf(Itinerary).isRequired,
  Query: Query.isRequired,
  Status: PropTypes.string.isRequired,
});

export default {
  SearchResults,
  Query,
  Itinerary,
  Leg,
  Segment,
  FlightNumber,
  Currency,
  Place,
};
