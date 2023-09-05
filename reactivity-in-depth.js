// 이펙트가 실행되기 직전에 설정된다.

import { computed, watchEffect, ref } from "vue";

{
  // 우리는 나중에 이것에 대해 다룰 것.
  let activeEffect;

  // 실제 업데이트를 실행하기 전에 자신을 현재 활성 이팩트로 설정하는 이팩트에 raw 업데이트 함수를 감싼다.
  // 이것은 현재 활성 이팩트를 찾기 위해 업데이트 동안 track() 호출을 활성화한다. -> activeEffect가 있어야 하니
  // 이 시점에서 의존성을 자동으로 추적하고 의존성이 변경될 때마다 다시 실행하는 이팩트를 만들었다.
  // 반응 이팩트(Reactive Effect)
  function whenDepsChange(update) {
    const effect = () => {
      activeEffect = effect;
      update(); // 이 update에서 activeEffect를 사용하는듯
      activeEffect = null;
    };

    effect();
  }

  // 현재 실행 중인 이팩트가 있는지 확인한다. 존재하는 경우, 추적 중인 속성에 대한 구독자 이팩트(Set에 저장)을 조회하고 이팩트를 추가한다.
  function track(target, key) {
    if (activeEffect) {
      // 이팩트 구독은 전역 : WeakMap<target, Map<key, Set<effect>>> 데이터 구조에 저장된다.
      // 속성에 대한 구독 이팩트 Set이 발견되지 않은 경우(처음 추적 시) 생성된다. -> getSubscribersForProperty()함수가 하는 일
      const effects = getSubscribersForProperty(target, key);
      effects.add(activeEffect);
    }
  }

  // trigger() 내부에서 속성에 대한 구독자 이팩트를 다시 조회한다. 그러나 이번에는 우리가 그것들을 대신 호출한다.
  function trigger(target, key) {
    const effects = getSubscribersForProperty(target, key);
    effects.forEach((effect) => effect());
  }

  function reactive(obj) {
    return new Proxy(obj, {
      get(target, key) {
        track(target, key);
        return target[key];
      },
      set(target, key) {
        target[key] = value;
        trigger(target, key);
      },
    });
  }

  function ref(value) {
    const refObject = {
      get value() {
        track(refObject, "value");
        return value;
      },
      set value(newValue) {
        value = newValue;
        trigger(refObject, "value");
      },
    };

    return refObject;
  }
}

export default () => {
  // ref 함수를 통해 현재 값을 반응형 객체로 만들어준다.
  // 값에 접근할 때 현재 실행중인 이팩트가 있는지 체크하고, 이팩트가 있을 시 해당 이팩트가 값을 구독하게 한다.
  // 값을 변경할 때 구독중인 이팩트들을 실행 시킨다.
  const A0 = ref(0);
  const A1 = ref(1);
  // 내부적으로 computed 는 무효화 및 재계산을 반응 이팩트를 사용하여 관리한다.
  const A2 = computed(() => A0.value + A1.value);

  // 업데이트 콜백을 인자로 받고 현재 실행중인 이팩트에 등록한다.
  // 그리고 우리는 반응형 객체를 만들 때 Key를 객체의 참조값으로 만들었기에
  // 값을 수정하면 등록된 이팩트가 trigger에 의해 실행된다.
  watchEffect(() => {
    // 다음과 같이 상태의 대한 반응형 렌더링을 구현할 수 있다.
    // Vue 컴포넌트가 상태와 DOM을 동기화 상태로 유지하는 방법과 매우 유사하다.
    console.log(`숫자 세기: ${A2.value}`);
  });

  window.test = {
    A0,
    A1,
    A2,
  };
};
