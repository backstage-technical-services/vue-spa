<template>
  <div class="container">
    <h1>Frequently Asked Questions</h1>
    <h3>How can I book Backstage?</h3>
    <p>
      Only via the web. It doesn't matter if you've spoken to every person in
      the society; we only accept bookings via our web booking system. Booking
      BTS as early as possible gives us more opportunity to ensure that the
      correct equipment, volunteers and planning is available. This generally
      means that we are booked around a month in advance (less than two weeks
      notice may result in a financial surcharge). Please note that a booking
      request does not constitute an acceptance of the booking.
    </p>

    <h3>Do BTS members get paid?</h3>
    <p>
      No. All our members are volunteers, doing full-time degrees here at the
      university. They sometimes work over 15 hours/day for an event, unpaid. To
      give an indication of cost, an experienced technician from an external
      company would cost over £100/day.
    </p>

    <h3>Why can't you do this/that event for free?</h3>
    <p>
      Because we need to pay for insurance, repairs, replacements, transport,
      photocopying costs, faxes, telephones, tape, bulbs, batteries, smoke fluid
      etc etc. Every year these costs add upto about £10,000 (not including
      hires) and we therefore need to issue a charge to break even at the end of
      each year.
    </p>
    <p>
      Whilst BTS do receive a budget from the union, it can't cover all our
      costs, especially for the upkeep of equipment that may be used over one
      hundred times a year.
    </p>

    <h3>Backstage is very expensive! I can get it cheaper elsewhere</h3>
    <p>
      To hire the equipment externally it would normally cost well over £250 per
      event plus personnel costs.
    </p>
    <p>
      People hiring are only charged fees that relate to hire of equipment,
      insurance and upkeep. All of the supervision is given free through
      volunteers' time. For example, a full band night in a venue would cost a
      society around £350: the current Backstage charge is less than half of
      that (assuming all kit required is available internally).
    </p>
    <p>
      You are quite welcome to use an external company; we would recommend
      [Enlightened Lighting](http://www.enlightenedlighting.co.uk/) in Bath, and
      [Audio Forum](http://www.audioforum.co.uk/) in Bristol.
    </p>

    <h3>The equipment is BUSU property, I'm a BUSU member, can I borrow it?</h3>
    <p>
      The majority of our equipment requires experience (and usually training)
      before it can be used and therefore it is rare for Backstage to run dry
      hires (providing equipment without personnel). For insurance and safety
      reasons, BTS doesn't lend out equipment to private individuals. Societies
      have borrowed some of our equipment in the past but each request is
      considered on an individual basis. Please contact us for more information.
    </p>

    <h3>I want to join Backstage!</h3>
    <p>
      Great idea - we're open to all members of Bath University Students' Union.
      Our weekly meetings happen on Wednesdays at 13:15 and membership only
      costs £4. For further details, please contact our Secretary at
      <a href="mailto:sec@bts-crew.com">sec@bts-crew.com</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FAQ extends Vue {
  readonly $title = 'FAQ'
}
</script>

<style lang="scss" scoped></style>
