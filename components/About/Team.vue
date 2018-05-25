<template>
<section class="uk-section-large">
  <div class="uk-container">
    <h2 class="uk-h1 uk-margin-bottom">Not all heroes wear capes</h2>
  </div>
  <div class="uk-position-relative tmcc-team">

    <TeamMember class="tmcc-team__member tmcc-team__member--james">
      <template slot="name">
        James Simpson
      </template>
      <template slot="position">
        Managin Director
      </template>
    </TeamMember>

    <TeamMember class="tmcc-team__member tmcc-team__member--anthony">
      <template slot="name">
        Anthony Collins
      </template>
      <template slot="position">
        Digital Manager
      </template>
    </TeamMember>

    <TeamMember class="tmcc-team__member tmcc-team__member--chloe">
      <template slot="name">
        Chloe Alfano
      </template>
      <template slot="position">
        Head of Design
      </template>
    </TeamMember>

    <TeamMember class="tmcc-team__member tmcc-team__member--dee">
      <template slot="name">
        Dee Byrne
      </template>
      <template slot="position">
        Account Director
      </template>
    </TeamMember>

    <TeamMember class="tmcc-team__member tmcc-team__member--danny">
      <template slot="name">
        Danny Kitchen
      </template>
      <template slot="position">
        Networking Manager
      </template>
    </TeamMember>

    <TeamMember class="tmcc-team__member tmcc-team__member--fiona">
      <template slot="name">
        Fiona Simpson
      </template>
      <template slot="position">
        Director
      </template>
    </TeamMember>

  </div>
</section>
</template>

<script>
import TeamMember from './TeamMember'

export default {
  name: 'Team',
  components: {
    TeamMember
  }
}
</script>

<style lang="scss" scoped>
.tmcc-team {
    height: 800px;
    max-width: 1360px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    &__member {
        height: 350px;
        width: 300px;
        position: absolute;
        background-size: 200px auto;
        background-repeat: no-repeat;
        background-position: center;
        &:hover {
            z-index: 7;
        }
        &--james {
            z-index: 6;
            background-color: #3CB878;
            background-image: url("/images/jamesface.svg");
        }
        &--anthony {
            z-index: 5;
            background-color: #F69679;
            background-image: url("/images/antface.svg");
        }
        &--chloe {
            z-index: 4;
            background-color: #F26D7D;
            background-image: url("/images/chloeface.svg");
        }
        &--dee {
            z-index: 3;
            background-color: #8560A8;
            background-image: url("/images/deeface.svg");
        }
        &--danny {
            z-index: 2;
            background-color: #448CCB;
            background-image: url("/images/dannyface.svg");
        }
        &--fiona {
            z-index: 1;
            background-color: #FFF568;
            background-image: url("/images/fionaface.svg");
        }
        &--james {
            top: 300px;
            left: 30%;
        }
        &--anthony {
            top: 350px;
            left: 3%;
        }
        &--chloe {
            top: 48px;
            left: 15%;
        }
        &--dee {
            top: 135px;
            left: 50%;
        }
        &--danny {
            top: 400px;
            left: 60%;
        }
        &--fiona {
            top: 95px;
            right: 3%;
        }
        @media screen and (max-width:1150px) {
            &--james {
                top: 350px;
                left: 35%;
            }
            &--anthony {
                top: 450px;
                left: 10%;
            }
            &--chloe {
                top: 110px;
                left: 12%;
            }
            &--dee {
                top: 40px;
                left: 41%;
            }
            &--danny {
                top: 425px;
                right: 45%;
            }
            &--fiona {
                top: 95px;
                right: 5%;
            }
        }
    }
}
</style>
