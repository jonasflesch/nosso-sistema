package br.com.nossosistema.backend.bean.common.reflection;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

public abstract class GenericUtils {

	public static Class<?> getType(Class<?> clazz) {
		Type genericType = clazz.getGenericSuperclass();
		if (genericType instanceof ParameterizedType) {
			ParameterizedType parameterizedType = (ParameterizedType) genericType;
			for (Type type : parameterizedType.getActualTypeArguments()) {
				return (Class<?>) type;
			}
		}
		return null;
	}

}
