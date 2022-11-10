<style scoped>
.exp-timeline {
  @apply mx-auto bg-white;
  max-width: 64rem;
}
</style>
<script lang="ts" setup>
import TimeLine from './timeline/TimeLine.vue';
import TimeLineSection from './timeline/TimeLineSection.vue';
import TimeLineCards from './timeline/TimeLineCards.vue';
import TimeLineCard from './timeline/TimeLineCard.vue';
</script>
<template>
<div class="exp-timeline">
  <TimeLine>
    <TimeLineSection year="2022">
      <TimeLineCards>
        <TimeLineCard st-date="2022-05" ed-date="2022-10">
          <p>라온프렌즈 국가연구과제 및 국가연구사업 등 3개 프로젝트</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2018 ~ 2022">
      <TimeLineCards>
        <TimeLineCard st-date="2018-04" ed-date="2022-04">
          <p>엘지유플러스 IPTV 시스템 프로젝트</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2017">
      <TimeLineCards>
        <TimeLineCard st-date="2017-12" ed-date="2018-03">
          <p>현대카드 B2B 고객관리 업무 개발</p>
        </TimeLineCard>
        <TimeLineCard st-date="2017-03" ed-date="2017-11">
          <p>강원랜드 전사적자원관리시스템 개발</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2016">
      <TimeLineCards>
        <TimeLineCard st-date="2016-12" ed-date="2017-02">
          <p>현대카드 B2B 포털 프론트엔드 개발</p>
        </TimeLineCard>
        <TimeLineCard st-date="2016-08" ed-date="2016-11">
          <p>롯데홈쇼핑 바로TV 클라우드 이관 개발</p>
        </TimeLineCard>
        <TimeLineCard st-date="2016-05" ed-date="2016-07">
          <p>KT알파(구 하이텔) 옐로우페이지 기반 사업자검색 개발</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2015">
      <TimeLineCards>
        <TimeLineCard st-date="2015-12" ed-date="2016-01">
          <p>KT SAT 고객 포털사이트 개발</p>
        </TimeLineCard>
        <TimeLineCard st-date="2015-03" ed-date="2015-11">
          <p>에덴레드코리아 전자바우처 시스템</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2014">
      <TimeLineCards>
        <TimeLineCard st-date="2014-03" ed-date="2014-12">
          <p>대명리조트 전사적 자원관리시스템 개발</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2013">
      <TimeLineCards>
        <TimeLineCard st-date="2013-11" ed-date="2014-02">
          <p>하나투어 B2B포털 개발</p>
        </TimeLineCard>
        <TimeLineCard st-date="2013-08" ed-date="2013-10">
          <p>(구)서울통상산업진흥원 서울특별시 창업스쿨 포털 개발</p>
        </TimeLineCard>
        <TimeLineCard st-date="2013-01" ed-date="2013-06">
          <p>교통안전공단 시설관리시스템 개발</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2012">
      <TimeLineCards>
        <TimeLineCard st-date="2012-05" ed-date="2013-01">
          <p>교통안전공단 시스템 유지보수</p>
        </TimeLineCard>
        <TimeLineCard st-date="2011-12" ed-date="2012-04">
          <p>루멘스 경영정보시스템 개발</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2011">
      <TimeLineCards>
        <TimeLineCard st-date="2010-11" ed-date="2011-11">
          <p>AK몰 온라인 API 연동 개발</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2010">
      <TimeLineCards>
        <TimeLineCard st-date="2010-01" ed-date="2010-10">
          <p>이러닝 솔루션 유지보수</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
    <TimeLineSection year="2009">
      <TimeLineCards>
        <TimeLineCard st-date="2009-04" ed-date="2009-12">
          <p>고객의 소리 관리자 개발</p>
        </TimeLineCard>
      </TimeLineCards>
    </TimeLineSection>
  </TimeLine>
</div>
</template>
