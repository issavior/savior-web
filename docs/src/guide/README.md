# Introductions
Savior是一款轻量级分布式技术解决方案框架，接入和使用极其简单，5秒钟即可接入使用！

Savior框架亦如其名，为业务立心，为技术立命，为往圣继绝学，为万世开太平，站在巨人的肩膀，比肩神明！
# Dependency
Maven Central

```xml
<dependency>
    <groupId>cn.sunjinxin.savior</groupId>
    <artifactId>savior</artifactId>
    <version>1.0.4</version>
</dependency>
```
# Start
在启动类上标注 *`@Savior`* 注解，即可启动Savior框架所有组件的功能。

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