#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"ti.cloud",@"name",@"ti.cloud",@"moduleid",@"2.0.5",@"version",@"1056b5d2-2bb5-4339-b930-297637aeec4e",@"guid",@"",@"licensekey",nil]];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"dictionary",@"name",@"bencoding.dictionary",@"moduleid",@"1.0",@"version",@"12604cea-a670-41eb-af77-cd5f0c103a0c",@"guid",@"",@"licensekey",nil]];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"tilanguageset",@"name",@"kaz.ti.languageset",@"moduleid",@"0.1",@"version",@"9b8c0b3d-1b5f-427b-8ae1-fbe50d4c59b3",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
