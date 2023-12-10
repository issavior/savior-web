# savior-event

# 官网
[事件总线EventBus技术解决方案 - Savior](http://savior.sunjinxin.cn/)

# 背景
事件总线常用来解耦复杂的业务，常见的Axon、Spring内都有事件总线的身影，一个组件往往需要具备良好的可用性和扩展性，savior-event应运而生。

# 特性
`savior-event`总线具备同步和异步事件，同时提供多种实现策略。

# 依赖

```xml
<dependency>
    <groupId>cn.sunjinxin.savior</groupId>
    <artifactId>savior-event</artifactId>
    <version>1.0.4</version>
</dependency>
```

# 启动
在启动类上标注 *`@Savior`* 注解，即可启动Savior框架事件总线组件的功能。
```java
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;
import cn.sunjinxin.savior.core.anno.Savior;

/**
 * @author issavior
 * @date 1314/05/20 00:00:00
 */
@Savior
@SpringBootApplication
public class AppRun {
    public static void main(String[] args) {
        SpringApplication.run(AppRun.class, args);
    }
}
```
# 策略
在application.yml配置文件中，可对savior-event事件总线组件进行定制化：
`组件提供了default和spring两种实现策略`

```yaml
savior:
  event:
    strategy: default 
    async-thread-pool:
      corePoolSize: 20
      maxPoolSize: 50
      queueCapacity: 1000
      threadNamePrefix: savior-example-event
```
# 事件监听
组件提供了同步事件监听和异步事件监听，两个接口，实现即可：

```java
1. cn.sunjinxin.savior.event.listener.sub.SyncListener
2. cn.sunjinxin.savior.event.listener.sub.AsyncListener
```

# 事件发布
```java
1. Eventer.SYNC.publish(EventContext.builder().build());
2. Eventer.ASYNC.publish(EventContext.builder().build());
```
