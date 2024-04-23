import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageKeys = {
  testKey: 'TestKey',
};

const AsyncStorageService = {
  async setItem(key: string, value: any): Promise<void> {
    const keyFinal = '@ProjectName:' + key;
    return await AsyncStorage.setItem(keyFinal, JSON.stringify(value));
  },

  async removeItem(key: string): Promise<void> {
    const keyFinal = '@ProjectName:' + key;
    return await AsyncStorage.removeItem(keyFinal);
  },

  async removeAllItems(): Promise<void> {
    const keys = ['@ProjectName:confirmedUser'];
    return await AsyncStorage.multiRemove(keys);
  },

  async getItem(key: string): Promise<any> {
    const keyFinal = '@ProjectName:' + key;
    let resp = await AsyncStorage.getItem(keyFinal);
    if (resp !== null) {
      resp = JSON.parse(resp);
      return resp;
    } else {
      return undefined;
    }
  },
};

export default AsyncStorageService;
